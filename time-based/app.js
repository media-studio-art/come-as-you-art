
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
                title: "Countdown",
                author: "Alaura Heikoop",
                description: `For this project we focused on taking black and white photographs. I thought it would be fun to see how many numbers I could find 
                            around campus in the amount of time we were given. My goal was to find them in places where they were single, not grouped within other 
                            numbers, and I ended up finding numbers 1 to 11 and arranged them to count down to the end of the video.`,
                thumbnail: "imgs/33.png"
            },
            
            // 2
            {
                title: "Leaving Class",
                author: "Aliyah Muto",
                description: `This photofilm captures students leaving classes and walking home or into MUSC. I wanted to capture 
                            the emotions of those finished with their classes, with some looking relieved and ready to chat with 
                            friends, and others seeming reserved and ready to head home.`,           
                thumbnail: "imgs/01.png"
            },

            // 3

            {
                title: "A not so long break",
                author: "Austin Frise",
                description: `What I was trying to get across with this project was just how fleeting the breaks we 
                            have as students are. It starts out looking at the monitor of one of the computers in 
                            the media lab, and then I have a bunch of transitional photographs that are from the 
                            perspective of the main character walking to where they are taking a break. The catch is 
                            that the amount of time spent on each photo is longer for the walking and transitional 
                            photographs.`,
                thumbnail: "imgs/02.png"
            },

            // 4
            {
                title: "Variations of Water",
                author: "Brooke Shelley",
                description: `My idea was to find different forms of water on McMaster campus (running water fountain, 
                            ice, snow, puddle, water bottle). I applied the rule of thirds and leading lines to my various 
                            shots including extreme close up, close up, wide shot, and medium shot. To make sure I got 
                            the flow of the water with a good depth of field I made sure to turn on continuous shots on 
                            the camera. Additionally, in Adobe Premiere Pro I purposefully made the pacing start slow when 
                            showing the bottled water, then the pacing gets quicker as the water appears through sinks and 
                            fountains, and processes to slow down when the water is in the form of snow and puddles. The 
                            pacing along with the peaceful water sounds are meant to create and enhance the water 
                            photography story.`,
                thumbnail: "imgs/03.png"
            },

            // 5
            {
                title: "Noisy Places",
                author: "Caidence Amartey.",
                description: `This photo film is meant to display peaceful solitude. The title of the project works 
                            to affirm that solitude can be found anywhere. The use of cowboy to close up shots was 
                            intended to ensure all photos generate a sense of distant intimacy. Viewers are in the 
                            space with the subject yet still remain far enough so as to not disturb them. The subject 
                            is in their own serene world. Overexposing the lighting added to the effect of serenity. 
                            It brightens the otherwise poorly lit library and isolates the subject without making the 
                            subject feel isolated.`,
                thumbnail: "imgs/04.png"
            },


            // 6
            {
                title: "Signs of Presence",
                author: "Xiaoqian Wen",
                description: `I focus on school spaces where there are signs of student activity but no students appear. 
                            Through small details in these corners, I try to show that students have been there. The 
                            series starts with sunlight from a low angle, and the light slowly fades into darkness. 
                            I mainly choose natural elements, metal, and walls, because they are common materials on 
                            campus and create a real school feeling.`,
                thumbnail: "imgs/05.png"
            },

            // 7
            {
                title: "accretion",
                author: "Charlotte Payne",
                description: `This piece is inspired by the defi nition of the word “accretion,” defi ned as the process 
                            of growth or increase, typically by the gradual accumulation of additional layers or matter. 
                            It follows the encroachment of nature into modern architecture, beginning with isolated 
                            buildings, moving through moments of coexistence between nature and the built environment, 
                            and culminating in a pure focus on nature. The ambience of car noises gradually giving way 
                            to birds chirping and ambient music reinforces this micronarrative and enhances the atmosphere. 
                            Ultimately, this piece exemplifi es the emptiness of man-made structure without the presence 
                            of greenery, illustrating that humanity cannot exist without it.`,
                thumbnail: "imgs/06.png"
            },

            // 8
            {
                title: "The Peek 觀𥦬日記",
                author: "Charlotte Wong",
                description: `The Peek explores the transition from human presence to absence through window-framed images. Images 
                            transfer from lively scenes with people to empty classrooms and hallways, as well as spaces that suggest 
                            recent activity despite their emptiness. Each strong note switches to a new image, reflecting how the 
                            human eye blinks and refocuses. Combine both visual and sound together reflect on absence, and the 
                            lingering traces of everyday life.`,
                thumbnail: "imgs/07.png"
            },

            // 9
            {
                title: "Frozen in Time",
                author: "Christian F Downey-Acevedo",
                description: `This composition captures a dog, observing a still forest. Each transition between photographs is representative 
                            of the dog blinking and looking around. Within this still forest, the dog observes mannequin like tree branches, 
                            that once held life and posture. The dog comes across a particular branch that has the texture of platinum, a boat 
                            sailing on grassy waves, and a smiling tree, observing the dog’s curiosity.`,
                thumbnail: "imgs/08.png"
            },

            // 10
            {
                title: "People and Places",
                author: "Cole McNally",
                description: `This photo best captures what I wanted the shoot to be, a representation of my fascination with looking 
                            into windows as I pass. I like to feel like a spectator of people and the world, in some way separate and 
                            completely innocuous. This is why I really like my poor attempt at “blending in” with the plants in the 
                            reflection, and the glimpse you get of the people inside. If I had more time and planning, I would have liked 
                            to have all ten of my photos be this conceptual.`,
                thumbnail: "imgs/34.png"
            },

             // 11
            {
                title: "Caught in Passing",
                author: "Damian Boukhers",
                description: `Caught in Passing is a black-and-white picture film that depicts an underground campus parking garage 
                             as a shared space for architectural and human presence. The sequence balances moments of movement and 
                             stillness using repetition, low light, and restrained pace, giving the subject and surroundings equal 
                             visual weight. Meaning comes gradually from spatial rhythm and subtle visual transitions rather than 
                             narrative action.`,
                thumbnail: "imgs/09.png"
            },

            // 12
            {
                title: "Busy, Busy",
                author: "Ella Graham",
                description: `“Busy, Busy” is a photoshoot that consists of those going through their day living their busy lives. As the day goes on the pictures get 
                            more distorted to showcase how hard it can be to focus on everything around us. Sometimes we can only narrow in on a goal or we move so 
                            fast the days start to blur. The music is chosen to reflect a leisurely pace contrasting the movement of the photos. A soft effect for 
                            the edited photos is chosen to keep it light and breezy compared to a more hardcore contrast to add to the effect of consistent flow.`,
                thumbnail: "imgs/40.png"
            },

            // 13
            {
                title: "Blown Fuse",
                author: "Emaris Cruz-Sanchez",
                description: `Blown Fuse is a piece about the attempts to respark imagination during phases of boredom or burnout, 
                            but to no avail. The image above is representative of the slow passage of time while capturing the empty 
                            hollow feeling one gets when looking at themselves for inspiration. The subject was asked to create puppet 
                            figures and the photos were taken as they slowly gave up and ran out of ideas. Gently complementing the 
                            series of photos is the sound of a damaged fluorescent capacitor repeatedly failing to turn on the light.`,
                thumbnail: "imgs/10.png"
            },


             // 14
            {
                title: "DON’T BLINK",
                author: "Eniola Olawale-Yusuf",
                description: `The photo series follows feelings of being watched and analyzed from afar. This character has a sense of 
                            paranoia and is hyper aware of their surroundings reinforcing their worry and fear. As the photos go on, 
                            the character makes brief eye contact with their stalker which eventually leads to a confrontation after 
                            attempts to run away. The photos prompt the audience to question who the stalker might be and what is going 
                            on behind the camera.`,
                thumbnail: "imgs/11.png"
            },

            // 15
            {
                title: "Campus",
                author: "Finley Jon",
                description: `This piece was originally created to document the feeling of walking around campus with the crowds that 
                            form between classes, but I couldn’t catch the crowds in the time that I had so instead I captured this strange, 
                            nearly empty campus. The photos show campus at a time of day with a very dramatic light, at a strange temperature 
                            for the time of year, and a weird combo of a relatively high amount of water on the ground and trees, dead from 
                            the cold winter that seems not to exist in the photos taken.`,
                thumbnail: "imgs/12.png"
            },

            // 16
            {
                title: "On the Way",
                author: "Guo Zhihao",
                description: `This photo film follows a simple walk across campus, documenting my partner’s movement toward a media art classroom. Along the way, 
                            I became interested in moments of stillness within motion—pauses on stairways, waiting near doors, and brief interactions with 
                            architectural spaces. observing an ordinary routine, the series suggests that quiet personal narratives can emerge from everyday environments.`,
                thumbnail: "imgs/39.png"
            },

            // 17
            {
                title: "B+W Photo Film",
                author: "Ivan Xu",
                description: `A walk around campus: the photographs show an act of noticing the details, lines, and shapes that defi ne the environment 
                            surrounding us. The changing light that arranges shadows into natural or symmetrical patterns, composing into features that 
                            create these fl eeting moments.`,
                thumbnail: "imgs/37.png"
            },

            // 18
            {
                title: "Going Up",
                author: "Julia Ross",
                description: `A 30-second black-and-white photo film highlighting the calmness and simplicity of the process of using an elevator. 
                            Beginning with a shot of the button to call the elevator, the film goes through each of the steps, from pressing the 
                            button, waiting for it to arrive, getting on the elevator, choosing which floor to get off on, and the doors closing 
                            behind you. The shots utilize blurred objects such as the elevator doors and hands to symbolize motion.`,
                thumbnail: "imgs/13.png"
            },

            // 19
            {
                title: "Pausing in the stairwell",
                author: "Wenjin Lyu",
                description: `This project focuses on the transitional space of campus stairwells, capturing moments when figures exist between 
                            motion and stillness during their passage. The subjects do not look directly at the camera; instead, they are frozen 
                            in mid-action. Their postures and flowing hair suggest continuous movement, yet they are momentarily suspended. The 
                            staircase's railings and walls form a closed, distinct geometric structure that envelops the figures, transforming 
                            the space itself into a visual framework that both constrains and guides the body. Through monochrome imagery and stark 
                            chiaroscuro, the work cultivates a cool, restrained observational perspective, prompting viewers to slow their gaze and 
                            rediscover the subtle states and fleeting sensations often overlooked in daily passage.`,
                thumbnail: "imgs/14.png"
            },

            // 20
            {
                title: "Disconnect",
                author: "Kale Ratcliffe",
                description: `This project is meant to be uncanny, and evoke the sense of disconnect that its name obviously implies. The model poses 
                            around regular locations, but often in odd ways. And more importantly, her face is always obscured– first by the angle, 
                            then by objects, then visible only through reflections. Whether the shot is closeup or far away, the lack of a face makes 
                            the main character mysterious and prevents the viewer from understanding her (what is she doing? How does she feel about 
                            all this? What does she look like?).`,
                thumbnail: "imgs/15.png"
            },

            // 21
            {
                title: "After The Revelry",
                author: "Kevin Wu",
                description: `My video portrays a student wandering across campus, listening to music and immersing himself in the beauty of nature. The camera 
                            shifts between first-person and third-person perspectives, revealing both what he sees and the evolution of his emotional state. 
                            From a broader perspective, the video conveys that life is filled with pressure and hardship. In order to escape these burdens, 
                            people often turn to intense forms of stimulation — such as video games, drugs, or sex — immersing themselves in a kind of illusory 
                            revelry. Yet when the revelry ends, what remains is ultimately solitude and emptiness, which only pushes life further into disorder. 
                            Therefore, one must have the courage to confront pressure and break through personal limitations in order to move toward a renewed future.`,
                thumbnail: "imgs/32.png"
            },

            // 22
            {
                title: "Photo Film - Computer Lab",
                author: "Klyde Soco",
                description: `This short photo film takes you a tour to the Media Arts lab in Togo Salmon hall 202. It gives you a look into the location, 
                            history and the purpose of it. Showing the entire laboratory and what it can offer. This allows people to potentially find 
                            interest in what we do in the Media Arts Program.`,
                thumbnail: "imgs/38.png"
            },

            // 23
            {
                title: "In A Bubble",
                author: "Kirsten Fortuna",
                description: `With this video, I wanted to showcase the students at McMaster and how many travel around campus in their own bubble. 
                            Each photo showcases a different individual or group and how they choose to spend their time when not in class.`,
                thumbnail: "imgs/16.png"
            },


              // 24
            {
                title: "Transition Into Focus",
                author: "Maheen Shaiq",
                description: `This photofilm observes a shift from movement to stillness as a student enters the computer lab and settles into their 
                            workspace. The sequence captures the quiet rhythm of academic life the pause at the doorway, the navigation through rows 
                            of computers, and the eventual immersion in screen light.`,
                thumbnail: "imgs/17.png"
            },

            // 25
            {
                title: "People Watching",
                author: "Mariana Fonseca Hernández",
                description: `People Watching is a series of photographs taken at McMaster University campus. These photographs are from the perspective 
                            of a people watcher in their day-to-day routine. The series emphasizes social interactions and small details like pieces of 
                            clothing and food that give insight into the object's life and what they value.`,
                thumbnail: "imgs/18.png"
            },


              // 26
            {
                title: "The Arcade",
                author: "Marzia Sarker",
                description: `This photo film captures my friend, Ansa, exploring the games in the campus arcade. By removing colour, the lively arcade 
                             moment feels quieter and more introspective, with light and contrast guiding the viewer’s attention. The film highlights 
                             the shifts between movement and stillness as Ansa plays, focusing on each game. I wanted to show how even a playful environment 
                             can also feel quiet, focused, and unexpectedly personal.`,
                thumbnail: "imgs/19.png"
            },

            // 27
            {
                title: "McMaster Built Against Time",
                author: "Maya Horvat",
                description: `Located in Hamilton, Ontario is the campus of McMaster University. On a daily basis, staff, students, 
                            and visitors pass by and perhaps walk through Hamilton Hall. Yet, they may be extremely busy and not realize 
                            the beauty of the old, gothic architecture appearing on academic buildings. Therefore, the Photo Film of 
                            McMaster Built Against Time encourages audiences to become more observant of the timeless features that 
                            surround them on campus grounds.`,
                thumbnail: "imgs/20.png"
            },

            // 28
            {
                title: "A Quiet Pause",
                author: "Nicole Astaiza",
                description: `This photograph captures a moment of stillness within the McMaster Gallery, where the fast
                            rhythm of campus life briefly slows. Through black-and-white imagery, the focus shifts to
                            posture, light, and quiet attention as the viewer pauses before the artwork. The absence of
                            colour emphasizes mood and atmosphere, highlighting how small gestures and moments of
                            reflection create a visual rhythm of calm and contemplation.`,
                thumbnail: "imgs/21.png"
            },

            // 29
            {
                title: "Creativity Follows",
                author: "Nicole Crea",
                description: `No matter where you are, creativity and inspiration will follow. A sketchbook was used as the main subject, 
                            creating repetition, as well as transitioning from place to place to give variety. A higher contrast was
                            present in the photos to emphasize detail and the main subject.`,
                thumbnail: "imgs/22.png"
            },

            // 30
            {
                title: "While No One Is Here",
                author: "Palak Kewalramani",
                description: `While No One Is Here is a black-and-white photo film composed of still images, observing a student waiting 
                            alone in an empty classroom. Through subtle gestures, phone use, and moments of stillness, the work reflects 
                            quiet pauses and connections to friends back home. The narrative emerges through repetition, absence, and 
                            the temporary nature of presence within academic space.`,
                thumbnail: "imgs/23.png"
            },

            // 31
            {
                title: "The McMaster Experience",
                author: "Phoenix Freeburg",
                description: `I collection of photos capturing the experiences of McMaster campus from end to end, showing famous landmarks 
                            of the university, and the common routes walked by its students. A beautiful representation of the common experience 
                            of McMaster.`,
                thumbnail: "imgs/24.png"
            },

            // 32
            {
                title: "Passing Through",
                author: "Porter Casey",
                description: `This photo-film follows everyday campus spaces like corridors, stairwells, classrooms, and exits putting focus 
                            on the quiet movement through them. The sequence moves through spaces without people, letting the architecture 
                            take the main focus. The repetition of hallways, doorways, and light creates a subtle sense of direction and 
                            disorientation, reflecting the building’s quiet tone even when it's outside of active use. By removing people and 
                            focusing on shifts in light, angle, and framing, the work considers how familiar environments change when they are 
                            empty and momentarily still. The project approaches everyday movement through campus as a series of small moments, 
                            rather than a story with a defined beginning or end.`,
                thumbnail: "imgs/25.png"
            },

            // 33
            {
                title: "The smallest turn, the greatest shift",
                author: "Preetpal Dadra",
                description: `This is a photo film about a university student who is having a bad day and is really stressed out. He keeps trying 
                            to go over and understand something in his notebook, but to no avail decides to go for a walk. Worried while walking 
                            he bumps into another university student who shifts his day from horrible to happiest. At the end, they learn the notes 
                            together, indicating how a small turn in life can sometimes make a great impact.`,
                thumbnail: "imgs/26.png"
            },

            // 34
            {
                title: "Curious Adventures",
                author: "Sasha Chung",
                description: `The in-between moments of a school day are captured in this black-and-white photo film that is completely set 
                            outside. The camera moves over college lawns, along wandering walks, over textured brick walls, and past 
                            wind-blown trees during break times. Curiosity leads it to focus on changing shadows, light coming through branches, 
                            footsteps on pavement, and passing people. The film turns common outdoor areas into places of discovery through careful 
                            exploration and slow observation, turning every pause into a little adventure.`,
                thumbnail: "imgs/35.png"
            },

            // 35
            {
                title: "<Together>",
                author: "Siting Wang",
                description: `Together is a black-and-white photo film observing small moments of people walking side by side on campus. Rather 
                            than focusing on individual stories, the work pays attention to shared movement, repetition, and quiet companionship.
                            Through shifts in distance and framing, the sequence slowly builds a sense of presence and connection. The narrative 
                            emerges from rhythm and accumulation rather than from plot.`,
                thumbnail: "imgs/27.png"
            },

             // 36
            {
                title: "The Man At The Bus Stop",
                author: "Sydney Tran",
                description: `This photo captures the sequences of the regular rhythm of life. Long, slow pace stops on the image as the man waits for the bus to come, 
                            a fast change of image as everyone quickly rushes over to the bus demonstrating the fast pace sequence, and the people in motion on a still 
                            image. This image helps us understand that every person is going through their own journey beyond the frame.`,
                thumbnail: "imgs/41.png"
            },

            // 37
            {
                title: "MUSC Motion",
                author: "Talon Singleton",
                description: `My project shows MUSC and the natural flowing foot traffic it receives over a short period. I wanted to capture how 
                            walking through here, there are different moments, sometimes it is busy, or it’s feeling a bit quieter, and I was able 
                            to capture that through this photo montage assignment.`,
                thumbnail: "imgs/36.png"
            },

            // 38
            {
                title: "The Brief Stay",
                author: "Weiteng Wu",
                description: `The 30-second black-and-white photo film shows a backpack with a 'B' marking which watches people in their daily activities at McMaster 
                            University during a snowy day. The sequence shows the object's short path through still photographs which capture its movement as faint 
                            blurs while it moves from being discarded on a cold bench to being carried through streets and placed in a classroom before it ends up 
                            abandoned again. The sequence explores three main ideas which include how things move from place to place and how people form bonds with 
                            objects and how ordinary moments contain hidden beauty.`,
                thumbnail: "imgs/42.png"
            },

            // 39
            {
                title: "hands",
                author: "Yang",
                description: `The project focus on a series of photos of hand, doing things that people do all the time, it focus on higher contrast and vintage 
                            style, with hands sticking out from certain different angle`,
                thumbnail: "imgs/10.png"
            },

            // 40
            {
                title: "Lunch Break",
                author: "Yoyo Qu",
                description: `This photograph captures the daily routine of students during their lunch break at the student center. Through still 
                            imagery, the work focuses on the actions of people eating in a public space. It emphasizes the recurring movements at 
                            lunchtime and the quiet flowing sense of time.`,
                thumbnail: "imgs/28.png"
            },

            // 41
            {
                title: "Don’t Look Back",
                author: "Yumo",
                description: `This work shows a figure moving forward in a space that feels empty and controlled. The body faces away and does 
                            not turn back. The path feels long and exposed. The fear comes from what cannot be seen behind.`,
                thumbnail: "imgs/29.png"
            },

            // 42
            {
                title: "No Way Home",
                author: "Zain Mir",
                description: `In this photo film I wanted to capture the chaos of the bus stop outside of MUSC (McMaster University Student Centre). 
                            Taking pictures of before and after the bus arrives showcasing how troublesome it is for some people to make it home. 
                            The photographs show a variety of angles and shots that give different perspectives of the chaos and after the seeming 
                            quietness of what once was. The music helps add tension creating an atmosphere similar to approaching a boss fight in 
                            a video game.`,
                thumbnail: "imgs/30.png"
            },

            // 43
            {
                title: "Coming to Class",
                author: "Zhehao Yang",
                description: `This photo film explores the quiet moments encountered while moving through campus on the way to class. The colorful bench 
                            contrasts with the neutral surroundings, highlighting pauses within an otherwise routine journey. By focusing on everyday spaces, 
                            the work reflects observation, repetition, and the subtle rhythm of student life.`,
                thumbnail: "imgs/31.png"
            },

            // 44
            {
                title: "Breath",
                author: "Zihan Zia",
                description: `The idea was to take a series of stills with a stationary subject, with the goal of shifting distance and shutter speed. This 
                            film captures the anxiety of being on a busy campus, not knowing where to go and being overwhelmed by the crowds, people can feel frozen.`,
                thumbnail: "imgs/44.png"
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
