
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
                title: "Moldy Apple",
                author: "Jiamin Ouyang",
                description: `I grew up under the care of my grandparents, and as I grew older, they
                            became my emotional anchor. To me, they were not only respected elders,
                            but also close friends and joyful companions. They left their hometown and
                            traveled 1,500 kilometers to a strange city, giving up the comfort of their later
                            years simply to raise me. I could always feel the depth of their love. Even
                            when I attended boarding school and faced weekly separations, those
                            temporary goodbyes were nothing compared to the finality of real loss. My
                            grandfather’s passing taught me that if I remember him, as long as someone
                            remembers him, he has not truly disappeared. I loved eating peeled apples,
                            and my grandfather would always smile while carefully peeling one for me.
                            Now, a forgotten apple turning moldy reminds me that the hands that once
                            prepared it with love are no longer here. I will treasure every moment with my
                            grandmother, and I will always love them.`,
                xButton: "28%",
                yButton: "5%",
                wButton: "30%",
                hButton: "5%"
            },

            // 2

            {
                title: "What I Remember",
                author: "Sandhya Acharya",
                description: `I’ve always had a terrible memory. This short documentary grows out of that feeling where 
                            I try to piece together what I remember from my childhood, my parents, and the stories that 
                            shaped me. I talk about my parents as complicated people, and how those memories shifted as 
                            I got older. This film blends reflection with moments of humour, showing how laughter can exist 
                            alongside grief. I also speak of my dad’s passing as a part of the ongoing way I remember him 
                            and carry him with me.`,
                xButton: "68%",
                yButton: "5%",
                wButton: "25%",
                hButton: "5%"
            },

            // 3
            {
                title: "The Utopia Daughter",
                author: "Xuezi Jin (Eloise)",
                description: `Full title: "The Utopia Daughter: A Distance of 11,400km" /  
                            This autobiographical documentary explores how distance redefines intimacy. As a22-year-old
                            woman raised in an East Asian household, I examine my anxious
                            attachment style to reveal an absence in my upbringing, parental favoritismandemotional
                            estrangement within my own family. The film spans 11,400 kilometers
                            between Shanghai and Hamilton, documenting my journey from being a "spectator"in my birth
                            family to finding belonging within my chosen family of close friends. Byrecognizing the
                            seasonal nature of all relationships, I arrive at a reconciliation withpain: accepting the
                            impermanence of connection while preserving a fragile yet
                            precious "Utopian" bond with my parents, one that can only exist across distance.`,
                xButton: "20%",
                yButton: "13%",
                wButton: "40%",
                hButton: "5%"
            },

            // 4
            {
                title: "Life is like a bar of soap",
                author: "Yuna Liu",
                description: `Each summer, when I return home, my mother places a new bar of soap beside the sink. 
                            By the time I leave again, it has quietly worn away. This simple ritual became the 
                            starting point for an autobiographical film about time, memory, and distance.
                            Through personal archives, voice over, and music, the work reflects on the experience 
                            of growing up and moving away from home. The soap becomes a fragile clock that measures 
                            the slow rhythm of leaving and returning, presence and absence. By focusing on an ordinary 
                            object, the film invites viewers to consider how small, unnoticed moments hold emotional 
                            weight, and how memories continue to change as we move forward.
`,
                xButton: "64%",
                yButton: "13%",
                wButton: "30%",
                hButton: "5%"
            },


            // 5
            {
                title: "Through Static and Memory",
                author: "Tyler Hooper",
                description: `Project description: This autobiographical documentary explores childhood memories through 
                            a mixture of family photos, home videos and personal childhood photos using analogue techniques 
                            to re-record and transform archival material. The film transitions between still images and 
                            slowed-down videos featuring moments of distortion and instability throughout, reflecting how 
                            memory is often uncertain and changes over time. The soundtrack features a recording of the 
                            filmmaker playing piano as a child; the audio is slowed and distorted to create something that 
                            sounds familiar yet feels distant at the same time. Instead of trying to interpret the past, 
                            this documentary acknowledges memories as emotional, inconsistent, and shaped by what remains 
                            recorded.`,
                xButton: "20%",
                yButton: "21%",
                wButton: "37%",
                hButton: "5%"
            },

            // 6
            {
                title: "Crossing the Alexandra Bridge",
                author: "Stephen Bowles",
                description: `Growing up, I always hated driving through the flat, mundane streets of the Canadian suburbs. 
                            Everything is just so far apart, it feels impossible to walk anywhere. Every plot of land is 
                            filled by a plaza with an oversized parking lot. Every store is corporate and sells the same 
                            thing for varying, hiked up prices. I was so sick of it. When I turned 18, I decided to escape 
                            the excruciatingly tedious life of the Canadian suburbs and take a two week long trip to the 
                            city of Ottawa. Crossing the Alexandra Bridge is about the excitement and mystique of falling 
                            in love with a place and earning your independence through the questionable decisions you make 
                            during your adolescence.`,
                xButton: "60%",
                yButton: "21%",
                wButton: "30%",
                hButton: "5%"
            },

            // 7
            {
                title: "GO SPORTS",
                author: "Matteo Reda",
                description: `This documentary is a key to my life, and wat I go through on a day-to-day basis. As cliche as 
                            it sounds, I've been around sports my entire life and I don't regret one bit of it. Every relationship, 
                            memory, and excitement in my life I feel comes from sports. My family all played sports growing up 
                            and it is fundamental for physical activity and mental strength. This passion of mine will never end 
                            and is part of my identity and personality. Every day I go about my life working out, playing hockey, 
                            watching football, spending time with my teammates... The glue to my life is sports. I don't think that 
                            when it's all said and done and I am done playing competitive sports, I would disregard everything that 
                            has made me who I am. Whether it was when I was 3 or 20, there was never any bit of regret to play any 
                            sport with anyone at anytime.
                            So here’s to sports! Go Sports!`,
                xButton: "16%",
                yButton: "29%",
                wButton: "40%",
                hButton: "5%"
            },

            // 8
            {
                title: "A Glimpse Through my Eyes",
                author: "insomniak03",
                description: `For this video I wanted to try and emulate the feeling
                             that you get flipping through a photo album. By incorporating fast
                             moving images with slower, calmer video elements I intended to
                             imitate the highs and lows of everyday life and how quickly
                             memories can be forgotten.`,
                xButton: "60%",
                yButton: "29%",
                wButton: "30%",
                hButton: "5%"
            },

             // 9
            {
                title: "Memories Fading into the Abyss",
                author: "Lorenzo Rillo",
                description: `Memories Fading into the Abyss explores childhood memory as something 
                            that dissolves over time rather than remaining present. Through analogue 
                            material transformation, such as childhood VHS tapes re-recorded off of 
                            a TV screen. Also photographs re-recorded using scanning, and then burned. 
                            Creating physical alteration, allowing parts of the images to become badly 
                            damaged like fragmented memories. The work reflects on how early life is 
                            often remembered through photos and videos instead of direct experience, 
                            creating distance between lived memory and recorded evidence. The audience 
                            is invited to experience memory not as a clear record, but as something 
                            dissolving into absence.`,
                xButton: "20%",
                yButton: "37%",
                wButton: "37%",
                hButton: "5%"
            },

            // 10
            {
                title: "Curly Hair",
                author: "Jitong Li",
                description: `As an East Asian girl, having curly hair was one of my defining features 
                            when most people around me had straight hair. When I was young, I didn't realize what it 
                            brought to me, but during my adolescence, this characteristic also meant a certain degree 
                            of uniqueness. This distinctiveness brought burdens and some troubles I couldn't resolve 
                            at the time. However, during my growth process, I chose to adjust my way of coexisting 
                            with it in a gentler manner. Now, I've gradually made peace with my hair. I understand 
                            everyone's differences and have begun to respect each person's unique traits.`,
                xButton: "60%",
                yButton: "37%",
                wButton: "30%",
                hButton: "5%"
            },


             // 11
            {
                title: "JAWANI",
                author: "Jovan Singh",
                description: `The name Jovan is derived from the Panjabi word jawani, meaning youth and the 
                            prime of life. This documentary traces my personal journey growing up Canadian-Panjabi 
                            and learning how to navigate and reconcile my queer identity within family, culture, 
                            religion, and expectation. Drawing from childhood archives alongside present-day 
                            footage, the film reflects on early moments of self-expression and becoming. Through 
                            poetic voiceover, JAWANI explores identity as layered and unfinished. Rather than 
                            offering a clear resolution, the documentary invites viewers to sit with ambiguity 
                            and complexity of growing into oneself.`,
                xButton: "15%",
                yButton: "46%",
                wButton: "40%",
                hButton: "5%"
            },

            // 12
            {
                title: "Love you, Love me.",
                author: "Jiaxin Chen",
                description: `This documentary explores the emotional power of idols and how that power shapes personal 
                            growth. Growing up in a family where love was rarely felt, I found comfort and strength in 
                            a group of idols who were energetic, positive and inspiring. Their presence brought light 
                            into a dark time in my life, gave me direction and helped me feel the power of love. The 
                            documentary follows my journey from admiring them as a child to meeting them in person at a 
                            concert ten years later. By traveling to the city where they lived and grew up and walking 
                            through places connected to their path, the documentary shows how the emotional bond between 
                            idols and fans can feel distant yet deeply connected. Through them, I learned how to understand 
                            myself, make peace with my past and find the courage to move forward. Loving them also taught 
                            me how to love myself.`,
                xButton: "60%",
                yButton: "46%",
                wButton: "30%",
                hButton: "5%"
            },

            // 13
            {
                title: "Somewhere Between Languages",
                author: "Jinni Chi",
                description: `Somewhere Between Languages is an autobiographical documentary that reflects on
                            growing up across different languages and cultural environments. Raised in a bilingual
                            household, the artist learned early that language is not only a way to communicate, but also
                            a way to adapt and fit in. Over time, this process of adjustment shaped how she speaks,
                            listens, and stays silent.
                            Using personal archival materials such as childhood photographs and family images, the
                            documentary traces moments of transition from early life to studying abroad. Analogue
                            media processes, including scanning and CRT re-recording, are used to translate these
                            memories across formats. Through distortion, repetition, and material texture, the work
                            mirrors how memories and identities are filtered over time. Rather than focusing on
                            migration itself, the project examines the subtle cost of constant adaptation and the ongoing
                            search for belonging without self-censorship.`,
                xButton: "15%",
                yButton: "54%",
                wButton: "40%",
                hButton: "5%"
            },

            // 14
            {
                title: "A Letter to Big Me",
                author: "Lara Sansoya",
                description: `A Letter to Big Me is a reflective short auto-biographical documentary exploring identity, 
                            memory, and the evolving relationship we have with ourselves. Built around a personal letter
                            written years ago, the film follows the experience of revisiting younger hopes, fears, and 
                            promises through the lens of the present. Using handwritten text, intimate narration, and visual
                            fragments, the project captures the quiet distance between who we were and who we are becoming. 
                            Rather than offering clear answers, the film embraces uncertainty, presenting identity as
                            something layered, and continually unfolding. The act of revisiting the letter becomes an opening 
                            for the present, as new words are written toward an unknown future, honoring the space between 
                            past and present selves. At its heart, the film is an act of compassion toward the self: a reminder 
                            that every version of us is still learning, still trying, and still worthy of becoming.`,
                xButton: "60%",
                yButton: "54%",
                wButton: "30%",
                hButton: "5%"
            },

            // 15
            {
                title: "My Mothers Daughter",
                author: "Jamila Andriesa",
                description: `My film explores the relationship between growing up with an abusive mom and performance. It shows 
                            the connection between invisibility and eccentricity.`,
                xButton: "15%",
                yButton: "62%",
                wButton: "40%",
                hButton: "5%"
            },

            // 16
            {
                title: "24 Kilograms ",
                author: "Emma Nash",
                description: `How do you cram your entire life into one suitcase, weighing no more than 24 kilograms? This piece is a 
                            personal reflection on the author's travel and transition to Canada from Aotearoa (New Zealand), as an 
                            exciting but fast and overwhelming experience. The presentation of an expansive range of photography and 
                            videography, shot in both countries, juxtaposes a small number of personal belongings brought with the author. 
                            Using these objects of signifance as motif, alongside quick, driving changes in pace, the piece aims brings 
                            light to the unsettling nature of settling in a new place, while exploring themes of nostalgia, anxiety, 
                            and eventual peace and acceptance.`,
                xButton: "60%",
                yButton: "70%",
                wButton: "30%",
                hButton: "6%"
            },


              // 17
            {
                title: "Diary of a creative",
                author: "Eniola Olawale-Yusuf",
                description: `The documentary is a reflective narration of the transformation and the growth of an artist. It goes 
                            back to the childhood moments and key pivotal moments to support the narration of what has contributed 
                            to make them fall in love with the art of creating. It uses an intimate first-person narrative perspective 
                            to trace my journey as an artist who discovered her creative identity gradually through lived experiences 
                            and memorable connections. It highlights elements from the world that has weaved itself in the exploration 
                            of identity through art, inviting the viewers to see the mind of a creative through her lens.`,
                xButton: "15%",
                yButton: "70%",
                wButton: "40%",
                hButton: "6%"
            },

            // 18
            {
                title: "My Girl",
                author: "James Schütte",
                description: `In an attempt to understand the life of a beloved companion, I dissect the knowledge and memories 
                            that I have of her. My Corgi manifests differently through the lenses of philosophy, science, and 
                            emotion, leaving no clear path for closure. Through a combination of archived photos and videos, 
                            3D animation, and video editing, I do my best to bring the viewer into a world where existence without 
                            purpose is redundant, yet purpose without existence is nothing at all.`,
                xButton: "60%",
                yButton: "62%",
                wButton: "30%",
                hButton: "5%"
            },


              // 19
            {
                title: "Tonight, Just Us",
                author: "Serena Lei",
                description: `My early experiences served as the inspiration for this short film. Both of my parents were very busy 
                            with their jobs when I was a small child, so I spent a lot of my early years alone. Instead of disagreements, 
                            their absence was characterized by silence, a stillness that grew accustomed with time. I discovered a 
                            teddy bear one day. It became my most significant friend after that. I started talking to this bear as 
                            though it were alive on the days when my parents weren't there and I had no one to talk to. I opened up to 
                            it about everything, including my worries, little everyday discoveries, and secrets I wasn't yet ready to 
                            discuss with grownups. Over time, this bear became more than just a toy. It turned into a quiet mirror that 
                            was like a second me, enabling me to organize my inner world and externalize my feelings. These made-up 
                            dialogues taught me how to deal with loneliness, self-soothe, and endure emotional isolation. The teddy bear 
                            served as a witness and a healer, assisting me in developing my sense of self while I was cut off from other 
                            people.`,
                xButton: "12%",
                yButton: "79%",
                wButton: "40%",
                hButton: "6%"
            },

            // 20
            {
                title: "Beside Me",
                author: "Xingguo Li",
                description: `I chose to create this documentary to share how I relate to my family and how my personality
                            gradually took shape within these relationships. By revisiting moments from childhood, I began
                            to recognize how ordinary, often unnoticed experiences quietly influenced the way I learned to
                            feel, observe, and respond to others. This documentary uses childhood memory as its starting 
                            point to explore how emotional awareness and self-identity develop over time. Through family 
                            photographs and home videos, the work reflects on moments that once felt simple or playful and 
                            reconsiders the meaning they carry when viewed from the present.`,
                xButton: "60%",
                yButton: "79%",
                wButton: "30%",
                hButton: "5%"
            },

            // 21
            {
                title: "Thanks",
                author: "Andrew Marmolejo",
                description: `My project is about sharing a story that changed my life forever. It’s a tale that took a 
                            completely different turn from my journey from the United States with my parents, who were 
                            undocumented, to Canada.`,
                xButton: "8%",
                yButton: "87.5%",
                wButton: "47%",
                hButton: "6%"
            },

            // 22
            {
                title: "Everything After Looks Different",
                author: "Cierra Benet",
                description: `Everything After Looks Different is an autobiographical documentary about a period of sudden personal 
                            change during my third year of university. Using archival footage, ambient sound, and voice recording, 
                            I reflect on the shift from emotional stagnancy into movement, new relationships, and a changing sense 
                            of self. The film moves through fragments of memory and lived experience, focusing on how a turning point 
                            is often only understood in hindsight. I’m interested in what it means to feel inside your own life while 
                            it is still unfolding.`,
                xButton: "60%",
                yButton: "87.5%",
                wButton: "30%",
                hButton: "6.5%"
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
