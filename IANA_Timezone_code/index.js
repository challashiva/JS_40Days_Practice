console.log("IANA TImezone");

export const SPECIAL_OFFSETS = {
  '+05:30': 'Asia/Kolkata',
  '+05:45': 'Asia/Kathmandu',
  '+09:30': 'Australia/Darwin',
  '+03:30': 'Asia/Tehran',
  '+04:30': 'Asia/Kabul',
  '+06:30': 'Asia/Yangon',
  '+08:45': 'Australia/Eucla',
  '+11:30': 'Pacific/Norfolk',
  '-09:30': 'Pacific/Marquesas',
  '-03:30': 'America/St_Johns',
};

/* Why does this exist?
Etc/GMT zones only support whole-hour offsets like +5, -8, etc. But some countries in the real world have offsets that are not whole hours:

India is +5 hours and 30 minutes
Nepal is +5 hours and 45 minutes

So we store these special cases in a map beforehand. Later in the function, we check this map first. If the offset matches one of these, we return the correct IANA city name directly instead of trying to use Etc/GMT. */

export function utcOffsetToIana(offset) {
  if (!offset || offset === 'UTC' || offset === 'GMT') return 'UTC';

  /* This handles the simplest cases right away and exits early:

!offset → if someone passes null, undefined, or an empty string '', just return 'UTC' as a safe default
offset === 'UTC' → already a valid IANA zone, return it directly
offset === 'GMT' → same as UTC, return 'UTC' */

  const normalized = offset.replace(/^(UTC|GMT)\s*/i, '').trim();

  /* Real-world inputs are messy. People might pass `'UTC+05:00'`, `'GMT+05:00'`, `'gmt+05:00'`, or even `'UTC +05:00'` (with a space). This line **strips all of that noise** so we're left with just the offset part.

//[Let's break down the regex /^(UTC|GMT)\s(*)/i:


// - `^` → start of the string
// - `(UTC|GMT)` → match either "UTC" or "GMT"
// - `\s*` → match zero or more spaces after it
// - `i` → case-insensitive (so `utc`, `Utc`, `UTC` all match)

// Then `.trim()` removes any remaining whitespace on both sides.
// ```
// 'UTC+05:00'   →  '+05:00'
// 'GMT+05:00'   →  '+05:00'
// 'gmt +05:00'  →  '+05:00'
// '+05:00'      →  '+05:00'   (nothing to strip, stays the same) */

  const match = normalized.match(/^([+-])(\d{1,2})(?::?(\d{2}))?$/);
  if (!match) return null;

  /* Now we have something like `'+05:00'` or `'-8'`. This regex **breaks it into parts**. Let's go piece by piece:

- `^` → start of string
- `([+-])` → **Capture Group 1**: the sign, either `+` or `-`
- `(\d{1,2})` → **Capture Group 2**: the hours, 1 or 2 digits (matches `5` or `05`)
- `(?::?(\d{2}))?` → this whole part is **optional** (the `?` at the end):
  - `:?` → an optional colon
  - `(\d{2})` → **Capture Group 3**: the minutes, exactly 2 digits
- `$` → end of string

So for different inputs, here's what `match` looks like:
```
'+05:00'  →  ['+05:00', '+', '05', '00']
'-8'      →  ['-8',     '-', '8',  undefined]
'+0530'   →  ['+0530',  '+', '05', '30'] */

  const [, sign, hours, minutes = '00'] = match;

/* We pull out the captured groups:

- The first element of `match` is the **full matched string** — we skip it with the empty `,`
- `sign` → the `+` or `-`
- `hours` → the hour digits like `'05'` or `'8'`
- `minutes` → the minute digits like `'30'`, **or** if it wasn't in the input, it defaults to `'00'`
```
Input: '+05:30'  →  sign = '+',  hours = '05',  minutes = '30'
Input: '-8'      →  sign = '-',  hours = '8',   minutes = '00'  (default) */

  const offsetKey = `${sign}${hours.padStart(2, '0')}:${minutes}`;
/* We build a **standardized key** so we can look it up in `SPECIAL_OFFSETS`. `.padStart(2, '0')` makes sure the hours are always 2 digits:
```
sign = '+',  hours = '5',   minutes = '30'  →  offsetKey = '+05:30'
sign = '-',  hours = '08',  minutes = '00'  →  offsetKey = '-08:00' */


  if (minutes !== '00' && SPECIAL_OFFSETS[offsetKey]) {
    return SPECIAL_OFFSETS[offsetKey];
  }
/* Two conditions must be true:

- `minutes !== '00'` → the offset has non-zero minutes (like `:30` or `:45`)
- `SPECIAL_OFFSETS[offsetKey]` → we have a mapping for it

If both are true, we return the IANA city name directly. For example:
```
offsetKey = '+05:30'  →  returns 'Asia/Kolkata'
offsetKey = '+05:45'  →  returns 'Asia/Kathmandu' */


  if (minutes !== '00') {
    console.warn(`No IANA zone for offset ${offsetKey}, falling back to whole hour`);
  }

  /* If we get here, it means the offset has minutes but it wasn't in our map. We log a warning so the developer knows something might be slightly off. The function doesn't crash — it just continues and uses the whole-hour fallback. */

  const h = parseInt(hours, 10);
  if (h > 14) return null;

  /* Etc/GMT zones only support offsets from -14 to +12. parseInt(hours, 10) converts the string '05' into the number 5. If it's bigger than 14, that's not a real offset, so we return null.
The 10 in parseInt is the radix — it tells JavaScript to parse it as base-10 (decimal). This avoids bugs where strings starting with 0 could be misread. */

  const reversedSign = sign === '+' ? '-' : '+';

  /* This is the quirky Etc/GMT rule — the signs are flipped:

UTC+5 → Etc/GMT-5
UTC-8 → Etc/GMT+8

So if the user said +, we flip it to -, and vice versa. */

  const gmtOffset = h === 0 ? '0' : `${reversedSign}${h}`;
  debugger;
  return `Etc/GMT${gmtOffset}`;

  /* 
If the hour is `0`, we don't want `Etc/GMT-0` or `Etc/GMT+0` — just `Etc/GMT0`. Otherwise, we combine the reversed sign and the hour number.
```
h = 0   →  gmtOffset = '0'   →  'Etc/GMT0'
h = 5, sign was '+'  →  gmtOffset = '-5'  →  'Etc/GMT-5'
h = 8, sign was '-'  →  gmtOffset = '+8'  →  'Etc/GMT+8' */
}

/* ## The Full Flow — One Example End to End

Let's trace `utcOffsetToIana('UTC+05:30')` through every step:
```
Step 2 → Not 'UTC' or 'GMT', so continue
Step 3 → normalized = '+05:30'
Step 4 → match = ['+05:30', '+', '05', '30']
Step 5 → sign = '+', hours = '05', minutes = '30'
Step 6 → offsetKey = '+05:30'
Step 7 → minutes is '30', and SPECIAL_OFFSETS['+05:30'] exists
       → return 'Asia/Kolkata'  ✅
```

And now `utcOffsetToIana('UTC-08:00')`:
```
Step 2 → Not 'UTC' or 'GMT', so continue
Step 3 → normalized = '-08:00'
Step 4 → match = ['-08:00', '-', '08', '00']
Step 5 → sign = '-', hours = '08', minutes = '00'
Step 6 → offsetKey = '-08:00'
Step 7 → minutes is '00', so skip
Step 8 → minutes is '00', so skip
Step 9 → h = 8, not > 14, so continue
Step 10 → sign was '-', so reversedSign = '+'
Step 11 → gmtOffset = '+8' → return 'Etc/GMT+8'  ✅ */