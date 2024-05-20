import * as DNS from "node:dns/promises"
import * as fs from "node:fs";

const IN_ADR = [
    "twitter.com",
    "github.com"
]

const OUT_ADR = new Map();
for(const adr of IN_ADR) {
    const ip = await DNS.resolve(adr);
    OUT_ADR.set(adr, ip)
}

fs.writeFileSync("records.json", JSON.stringify(Object.fromEntries(OUT_ADR), null, 4))