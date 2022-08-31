function jumpingOnClouds(c) {
let jumps = 0
    let i = 0;
        do {
            if(c[i + 2] == 0) {
                jumps+=1;
                i += 2;
            } else if(c[i + 1] == 0) {
                jumps+=1;
                i += 1;
            }

        } while(i != c.length - 1);
        return jumps
}
