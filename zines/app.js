
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
        const showDialog = ref(false)
        const showIntroDialog = ref(true)
        const selectedProject = ref({}); // Holds the clicked project's data
        const projects = [

            // 1
            {
                title: "Passing",
                author: ", Ace Zadvorny ",
                description: ``,
                thumbnail: "imgs/ace.png"
            },

            // 2
            {
                title: "VO₂ Peak Research Study",
                author: "Amber Forno",
                description: `Full Title: VO₂ Peak Research Study: Moderate-Intensity Continuous Training, Participant 00489 / etchings on paper, 
                            bound as an artist book / 10.75” x 7.75” x 1.25”`,
                thumbnail: "imgs/amber.png"
            },

             // 3
            {
                title: "Drowning in my elementary school swimming pool",
                author: "Amelia Doty",
                description: `Pen and marker on paper with Lino cut and print / 7inches x 7inches
                            ——— A poetry book that follows the development of shame through a young girls life.`,
                thumbnail: "imgs/amelia.png"
            },

            // 4

            {
                title: "Withered",
                author: "Bronte Mayot",
                description: `Multimedia work containing dried-up rose metals, digital illustrations on watercolour paper / 8.5 x 11 
                            ——— This work is inspired by the concepts of decay and death, through the imagery of flowers as 
                            storytellers to symbolize the passage of time.`,
                thumbnail: "imgs/bronte.png"
            },

            // 5
            {
                title: "Dead Skin",
                author: "Charlie Saltzman",
                description: ``,
                thumbnail: "imgs/charlie.png"
            },

            // 6
            {
                title: "Leave my body behind, I'll take the rest",
                author: "Charlotte Heron",
                description: `Paper, Epson printer, Brother cut and scan / 5.5 in x 9.5 in x 0.5 in 
                            ——— A non linear story about an ever changing relationship to self, gender and womanhood--- it gives just as much as it takes.`,
                thumbnail: "imgs/charlotte.png"
            },

            // 7
            {
                title: "Canadian Passport",
                author: "Chris Yanes- Alvarenga",
                description: ``,
                thumbnail: "imgs/chris.png"
            },

             // 8
            {
                title: "Eldest Daughter",
                author: "Esther Chai",
                description: `Ink  Scraps of paper from magazines / 7" x 11" (LxW)
                            ——— For every eldest daughter who had to grow up too soon.`,
                thumbnail: "imgs/esther.png"
            },

             // 9
            {
                title: "Wasting Light",
                author: "Georgina Farrow",
                description: `Textiles / 4 in x 4 in
                            ——— Depiction of wasting time using a repeated image and tule overlays to represent the passage of time through light.`,
                thumbnail: "imgs/georgina.png"
            },

            // 10
            {
                title: "Kiss and Tell",
                author: "Islay Pearson-Whear",
                description: ``,
                thumbnail: "imgs/islay.png"
            },

            // 11
            {
                title: "",
                author: "Logan",
                description: ``,
                thumbnail: "imgs/logan.png"
            },

            // 12
            {
                title: "You need to wake up Kevin",
                author: "Kevin Wu",
                description: `I used the color markers to color it. And then made a book by folding the paper. Then put it in the box. 
                            ——— My work was inspired by the fact that I slept for a whole day last week and realized how quickly time passes. I need to cherish time . I created this 
                            book made up of ancient Chinese clocks and Western clock numbers.`,
                thumbnail: "imgs/kevin.png"
            },

            // 13
            {
                title: "Swampy Ditches",
                author: "Maia Venturelli Golba",
                description: `Harvesting in the 905 Watercolour/Acrylic paint and Photo collage / 59 X 11 
                            ——— Inspired by the real harvest records of a local Hamilton farm, Harvesting in the 905 divides time through different 
                            vegetables harvested in seasons.”`,
                thumbnail: "imgs/maia.png"
            },

            // 14
            {
                title: "Nesting",
                author: "Mara Sanders",
                description: `Watercolour on paper, fabric, thread, graphite on paper / 13" x 2" x 10" 
                            ——— To reflect on the idea of a 'time based' narrative, I wanted to look at my own artistic practice and use 
                            of media. Knitting, sewing, and watercolour paintings are what began my art practice early in my childhood, 
                            and have been constant materials I have reached for in the years since. By integrating these mediums, I wanted 
                            to illustrate how I am made up of these artistic expressions, and how I have built a protective space in art 
                            for myself.`,
                thumbnail: "imgs/mara.png"
            },

            // 15
            {
                title: "Blue Gill’s Descent - Journal #2",
                author: "Rowan van Oosten",
                description: `Ink on paper / 15cm x 25cm 
                            ——— My work is inspired by handmade research journals. It explores the fears and feelings of a scientist, 
                            Blue Gills throughout a underwater ecological disaster with a supernatural twist.`,
                thumbnail: "imgs/rowan.png"
            },

            // 16
            {
                title: "Don't cry ",
                author: "Sabrina Vachon",
                description: `Print, flower metal / 2x4 inches
                            ——— I wanted to play with the idea of permanence with a medium that is not meant to last forever. I have also recently 
                            broken my mirror into smithereens and failed.`,
                thumbnail: "imgs/sabrina.png"
            },

            // 17
            {
                title: "Bedtime",
                author: "Tristan Zadvorny",
                description: `I used coloured pencils and acrylic wash on regular card paper / 4.5 x 6 
                            ——— My work is inspired by the novelty of going to bed, and sleeping`,
                thumbnail: "imgs/tristan.png"
            },

            // 18
            {
                title: "Dear Diary",
                author: "Yeemon",
                description: `Paper, Ink / 5"x3.5"x0.5"
                            ——— Dear Diary is a black-and-white illustrated diary that traces the emotional aftermath of a breakup over time. Each
                            entry is a different stage of grief, shifting in voice, composition, and visual intensity as the narrator moves from shock 
                            to acceptance.`,
                thumbnail: "imgs/yeemon.png"
            },


        ]

        function toggleDialog(project) {
            selectedProject.value = project; // Store the clicked project
            showDialog.value = true;        // Open the dialog
        }


        function findCoordinates(event) {
            // clientWidth/Height excludes scrollbars, matching CSS % logic
            const width = document.documentElement.clientWidth;
            const height = document.documentElement.clientHeight;

            const xPercent = (event.clientX / width) * 100;
            const yPercent = (event.clientY / height) * 100;

            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }

        return {
            projects,
            findCoordinates,
            showDialog,
            showIntroDialog,
            toggleDialog,
            selectedProject

        }
    }
}

createApp(App).use(vuetify).mount('#app');
