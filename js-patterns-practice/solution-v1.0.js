const data = `city,population,area,density,country
Shanghai,24256800,6340,3826,China
Delhi,16787941,1484,11313,India
Lagos,16060303,1171,13712,Nigeria
Istanbul,14160467,5461,2593,Turkey
Tokyo,13513734,2191,6168,Japan
Sao Paulo,12038175,1521,7914,Brazil
Mexico City,8874724,1486,5974,Mexico
London,8673713,1572,5431,United Kingdom
New York City,8537673,784,10892,United States
Bangkok,8280925,1569,5279,Thailand`;

let max = 0;
data
  .split('\n')
  .slice(1, -1)
  .map((r) => r.split(','))
  .sort((r1, r2) => parseInt(r2[3]) - parseInt(r1[3]))
  .map((r, i) => {
    max = i === 0 ? parseInt(r[3]) : max;
    const percent = Math.round((r[3] * 100) / max);
    let s = r[0].padEnd(18);
    s += r[1].padStart(10);
    s += r[2].padStart(8);
    s += r[3].padStart(8);
    s += r[4].padStart(18);
    s += percent.toString().padStart(6);
    console.log(s);
  });
