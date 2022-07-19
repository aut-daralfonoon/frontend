class Animation {
    constructor() {
        // the following script does the header animation in home page
        self.elementID = "inc-name";
        self.text = "دارالفنون امیرکبیر";
        self.index = 0;
    }

    // write function updates the header
    write() {
        // update time is 0.3 seconds
        let time = 300;
        // creating the message
        let message = self.text.slice(0, self.index)
        // updating index
        self.index++;
        if (self.index === self.text.length + 1) {
            self.index = 0;
            // after the message is complete wait 3 seconds
            time = 3000;
        } else {
            message = message + "|";
        }

        // get the element and update the text
        document.getElementById(self.elementID).innerText = message;

        // recall this function
        setTimeout(self.write, time);
    }
}

export default new Animation()