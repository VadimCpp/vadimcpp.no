/**
 * The code is used in Bot page to request ChatGPT via API.
 */

const qnas = [
    {
        question: "Hvem er noen kjente norske forfattere?",
        answer: "Noen kjente norske forfattere inkluderer Henrik Ibsen, Jo Nesbø, Sigrid Undset, Karl Ove Knausgård, Camilla Collett, Jostein Gaarder, Knut Hamsun, Amalie Skram og Vigdis Hjorth. Disse forfatterne har gjort betydelige bidrag til norsk litteratur og har oppnådd internasjonal anerkjennelse.",
    },
    {
        question: "Hvordan påvirker klimaendringene dyrelivet i Arktis?",
        answer: "Klimaendringene har en dramatisk innvirkning på dyrelivet i Arktis. Stigende temperaturer smelter isen, som er avgjørende for mange arter som isbjørner, seler og hvalrosser, og ødelegger deres leveområder. Isbrev og isfjell blir mindre stabile, og dette påvirker sel- og isfuglbestander. Endringer i havstrømmer påvirker også fiskebestander, som igjen påvirker dyrearter som avhenger av disse fiskene som mat. Klimaendringene har også negative konsekvenser for plante- og dyreliv på land, med endrede vekstsesonger, økt erosjon og ødeleggelse av habitater. Alt i alt trues det arktiske dyrelivet av de raskt skiftende forholdene som klimaendringene medfører.",
    },
    {
        question: "Hva er den høyeste fjelltoppen i Norge?",
        answer: "Den høyeste fjelltoppen i Norge er Galdhøpiggen, som ligger i Jotunheimen nasjonalpark. Det stiger til en imponerende høyde av 2 469 meter over havet. Galdhøpiggen er et populært turmål for fjellklatrere og fotturister som ønsker å oppleve den majestetiske naturen og den fantastiske utsikten fra toppen.",
    },
    {
        question: "Hvordan feirer nordmenn jul?",
        answer: "Nordmenn feirer jul med tradisjonelle ritualer og skikker. Det inkluderer å pynte juletreet, gi og motta gaver, spise tradisjonell julemat som ribbe, pinnekjøtt og lutefisk, samt bake julekaker som pepperkaker og krumkaker. Familien samles for å spise julemiddag, synge julesanger, og åpne gaver på julaften. Mange nordmenn deltar også i julegudstjenester og tenner julelys for å skape en koselig atmosfære. Julen er en tid for fellesskap og hygge, der man tilbringer tid med familie og venner.",
    },
    {
        question: "Kan du anbefale en god treningsrutine for å forbedre kondisjonen min?",
        answer: "En effektiv treningsrutine for å forbedre kondisjonen din kan inkludere både kardiovaskulær trening og intervalltrening. Prøv å variere mellom løping, sykling eller svømming for å engasjere forskjellige muskelgrupper. Legg til intervalltrening med høy intensitet, der du bytter mellom perioder med intens anstrengelse og perioder med lavere intensitet eller hvile. Husk å starte med en passende intensitet og gradvis øke både varigheten og intensiteten over tid. Konsistens er nøkkelen, så sørg for å trene regelmessig og gi kroppen din nok tid til å hvile og komme seg mellom øktene.",
    },
    {
        question: "Hvordan kan jeg redusere mitt karbonavtrykk i hverdagen?",
        answer: "For å redusere ditt karbonavtrykk i hverdagen kan du ta flere tiltak. Velg miljøvennlige transportmetoder som sykling, kollektivtransport eller bildeling. Reduser energiforbruket ved å slå av lys og elektroniske apparater når de ikke er i bruk, og bytt til energieffektive apparater. Kutt ned på kjøttforbruket ved å ha flere vegetariske måltider i uken. Kjøp lokalprodusert mat for å redusere utslippene forbundet med transport. Gjenvinn og resirkuler så mye som mulig, og unngå engangsprodukter. Reduser vannforbruket og vurder å investere i grønne energikilder som sol- eller vindkraft.",
    },
    {
        question: "Hva er de viktigste begivenhetene i norsk historie?",
        answer: "De viktigste begivenhetene i norsk historie inkluderer kristningen av Norge rundt år 1000, Svartedauden i 1349, Kalmarunionen i 1397, reformasjonen i 1536, grunnloven i 1814, unionsoppløsningen fra Sverige i 1905, kvinners stemmerett i 1913, okkupasjonen under andre verdenskrig fra 1940-1945, og oljefunnet i Nordsjøen i 1969.",
    },
    {
        question: "Hvordan lager man tradisjonell norsk lutefisk?",
        answer: "For å lage tradisjonell norsk lutefisk, begynner man med tørrfisk som torsk eller sei. Fisken bløtlegges i kaldt vann i flere dager for å fjerne saltet. Deretter legges den i en luteløsning, vanligvis av vann og lut, i omtrent en uke. Dette gjør at fisken blir geleaktig og mister noe av teksturen. Etter luteprosessen bløtlegges fisken på nytt i kaldt vann før den kokes eller dampes. Lutefisken serveres ofte med ertestuing, bacon, poteter og sennepssaus for å balansere smaken. Det er en tradisjonell norsk rett som ofte spises i julen.",
    },
    {
        question: "Hva er de mest populære sportene i Norge?",
        answer: "De mest populære sportene i Norge inkluderer fotball, langrenn, håndball, alpint, skiskyting, friidrett, ishockey og sykling. Fotball er den mest populære sporten med et bredt engasjement på både amatørnivå og profesjonelt nivå. Langrenn har en lang tradisjon i Norge og har mange utøvere og entusiaster. Håndball har også en betydelig tilhengerskare, spesielt på kvinnefronten. Alpint og skiskyting har blitt populært takket være suksessrike norske utøvere. Friidrett, ishockey og sykling tiltrekker seg også en betydelig interesse og deltakelse i landet.",
    },
];


document.addEventListener("DOMContentLoaded", function () {

    // init page with random question
    const randomIndex = Math.floor(Math.random() * qnas.length);
    const randomQuestion = qnas[randomIndex].question;
    document.getElementById("test-area").innerHTML = randomQuestion;

    var testButton = document.getElementById("btn-test");
    testButton.addEventListener("click", function () {
        fetch('api/gpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: randomQuestion }),
        })
        .then(async response => {
            // Handle the response from the Razor Page handler
            if (response.ok) {
                // Handle successful response
                const data = await response.json();
                console.log('Model method triggered successfully! Response: ', data);
                document.getElementById("result-area").innerHTML = data.answer;
            } else {
                // Handle error response
                console.error('Error triggering model method:', response.status);
            }
        })
        .catch(error => {
            // Handle any network or fetch API errors
            console.error('Error triggering model method:', error);
        });
    });
});
