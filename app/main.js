const { createApp } = Vue;

createApp({
    data() {
        return {
            submissions: Seed.submissions
        };
    }
}).mount(".section");