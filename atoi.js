const atoi = (string) => {
    let trimmed = string.trim();
    let pattern = /^(\-|\+)?[0-9]+/;
    console.log(trimmed);
    console.log(parseInt(trimmed));
    let temp = pattern.exec(trimmed);
    console.log(temp);
    if (temp) {
        let number = Number(temp[0]);
    }
};

atoi('9ujfdsnfjk');