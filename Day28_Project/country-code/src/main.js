console.log("Country Explorer");

const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const countryDetails = document.getElementById("countryDetails");

const loader = document.getElementById("loader");
const errorElem = document.getElementById("error");


let map;

searchBtn.addEventListener('click',async ()=>{
    const countryName = countryInput.value.trim();
    if(!countryName) return;

    await fetchCountry(countryName);
});


async function fetchCountry(name) {
    loader.classList.remove("hidden");
    errorElem.classList.add("hidden");
    countryDetails.innerHTML="";
    try {
        const response =  await fetch(`https://restcountries.com/v3.1/name/${name}`);

        const data = await response.json();

        const country = data[0];
        if(!country) {
            throw new Error("Invalid Country Name");
        }

        const languages = country.languages ? Object.values(country.languages).join(",") : "N/A";

        countryDetails.innerHTML =
        `
            <div class="p-4 border shadow rounded">
                <img src="${country.flags.svg}" alt="country flag" class="w-34 mb-2" />
                <h2 class="text-xl font-bold">${country.name.common}</h1>
                <p><strong>Capital: </strong>${country.capital}</p>
                <p><strong>Population: </strong>${country.population.toLocaleString()}</p>
                <p><strong>Languages: </strong>${languages}</p>
                <div class="mb-4">
                    <h2 class="text-xl font-semibold mb-2">Local Times</h2>
                    <ul id="timezoneList" class="list-disc ml-6"></ul>
                </div>
            </div>
        `;
        updateTimeZones(country.timezones);
        drawMap(country.latlng,country.name.common);
    } catch (error) {
        errorElem.classList.remove("hidden");
        errorElem.textContent = error.message || "Failed to load country information.";
    } finally {
        loader.classList.add("hidden");
    }
}

function updateTimeZones(timezones) {
    const timezoneList = document.getElementById("timezoneList");
    timezoneList.innerHTML="";

    timezones.forEach((tz) => {
        const li = document.createElement("li");
        const localTime =  getTimeUsingIntl(tz);

        li.textContent=`${tz} - ${localTime}`;
        timezoneList.appendChild(li);
    });
}

function getTimeUsingIntl(tz) {
    try {
        const options ={
            timeZone:utcOffsetToIana(tz),
            hour:"2-digit",
            minute:"2-digit",
            hour12:true
        }
        console.log(Intl.DateTimeFormat("en-US",options).format());
        return Intl.DateTimeFormat("en-US",options).format(new Date());
    } catch (error) {
        console.warn(`Timezone ${tz} not supported, falling back.`);
        return "Unsupported Timezone."
    }
}

function drawMap(latlang,name) {
    const [lat,lng] = latlang;

    if(!map) {
        map = L.map('mapDetails').setView([lat, lng], 5);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    } else {
        map.setView([lat, lng], 5);
    }
    
    L.marker([lat, lng]).addTo(map).bindPopup(name).openPopup();
}

const SPECIAL_OFFSETS = {
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

function utcOffsetToIana(offset) {
  if (!offset || offset === 'UTC' || offset === 'GMT') return 'UTC';

  const normalized = offset.replace(/^(UTC|GMT)\s*/i, '').trim();

  const match = normalized.match(/^([+-])(\d{1,2})(?::?(\d{2}))?$/);
  if (!match) return null;

  const [, sign, hours, minutes = '00'] = match;
  const offsetKey = `${sign}${hours.padStart(2, '0')}:${minutes}`;

  if (minutes !== '00' && SPECIAL_OFFSETS[offsetKey]) {
    return SPECIAL_OFFSETS[offsetKey];
  }

  if (minutes !== '00') {
    console.warn(`No IANA zone for offset ${offsetKey}, falling back to whole hour`);
  }

  const h = parseInt(hours, 10);
  if (h > 14) return null;

  const reversedSign = sign === '+' ? '-' : '+';
  const gmtOffset = h === 0 ? '0' : `${reversedSign}${h}`;
  return `Etc/GMT${gmtOffset}`;
}

// fetchCountry('denmark');