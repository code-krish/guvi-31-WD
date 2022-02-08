let time = 11;
setTimeout(() => {
    document.querySelector(".data").innerHTML = "Let's Go";
    setTimeout(() => {
        time--;
        document.querySelector(".data").innerHTML = time;
        setTimeout(() => {
            time--;
            document.querySelector(".data").innerHTML = time;
            setTimeout(() => {
                time--;
                document.querySelector(".data").innerHTML = time;
                setTimeout(() => {
                    time--;
                    document.querySelector(".data").innerHTML = time;
                    setTimeout(() => {
                        time--;
                        document.querySelector(".data").innerHTML = time;
                        setTimeout(() => {
                            time--;
                            document.querySelector(".data").innerHTML = time;
                            setTimeout(() => {
                                time--;
                                document.querySelector(".data").innerHTML = time;
                                setTimeout(() => {
                                    time--;
                                    document.querySelector(".data").innerHTML = time;
                                    setTimeout(() => {
                                        time--;
                                        document.querySelector(".data").innerHTML = time;
                                        setTimeout(() => {
                                            time--;
                                            document.querySelector(".data").innerHTML = time;
                                        }, 1000);
                                        setTimeout(() => {
                                            document.querySelector(".data").innerHTML = "Happy new year";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);                            
                              }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);