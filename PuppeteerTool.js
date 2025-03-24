const puppeteer = require("puppeteer");

const USERNAME = "coolm111222333"; 
const PASSWORD = "Hamoodi22"; 

const answerKey = {
    // Ninth Grade Vocabulary Quiz
    "Heed": "paying particular notice (as to children or helpless people)",
    "Advocate": "a person who pleads for a cause or propounds an idea",
    "Belittle": "lessen the authority, dignity, or reputation of",
    "Parsimony": "extreme care in spending money",
    "Tangible": "possible to be treated as fact",
    "Inadvertent": "without intention (especially resulting from heedless action)",
    "Abstract": "a concept or idea not associated with any specific instance",
    "Guile": "shrewdness as demonstrated by being skilled in deception",
    "Mar": "a mark or flaw that spoils the appearance of something (especially on a person's body)",
    "Facilitate": "make easier",
    "Deference": "a disposition or tendency to yield to the will of others",
    "Comply": "act in accordance with someone's rules, commands, or wishes",
    "Eccentric": "a person of a specified kind (usually with many eccentricities)",
    "Censure": "harsh criticism or disapproval",
    "Recalcitrant": "marked by stubborn resistance to authority",
    "Verbose": "using or containing too many words",
    // Tenth Grade Vocabulary Quiz
    "Soliloquy": "the act of talking to oneself or a dramatic monologue",
    "Gregarious": "seeking and enjoying the company of others",
    "Malcontent": "person dissatisfied with existing state of affairs",
    "Adjunct": "something attached to but holding an inferior position",
    "Eloquent": "expressing yourself readily, clearly, effectively",
    "Malicious": "wishing evil or harm upon others",
    "Malevolent": "wishing or appearing to wish evil to others",
    "Juncture": "a joining together; the point at which two things are joined; any important point in time",
    "Junction": "an act of joining or adjoining things",
    "Malady": "a sickness, illness, disease, disorder",
    "Phonetic": "related to the sounds in a language",
    "Segregate": "separating into different groups",
    "Congregate": "To come together in a group, assemble.",
    "Dialogue": "a conversation between two persons",
    "Injunction": "a formal command or admonition",
    // Eleventh Grade Vocabulary
    "Discern": "to recognize the difference",
    "Denotation": "a word that names or signifies something specific",
    "Conspicuous": "noticeable, obvious",
    "Assuage": "to relieve or soothe",
    "Conceit": "an excessively favorable opinion of one's own ability, importance or wit",
    "Annotated": "supplied with or containing explanatory notes and textual comments",
    "Ambiguity": "doubtfulness or uncertainty of meaning or intention",
    "Quandary": "a state of perplexity or uncertainty",
    "Allegory": "a representation of an abstract or spiritual meaning through concrete or material forms",
    "Buoyancy": "the power to float or rise in a fluid, the upward pressure exerted by the fluid in which a body is immersed",
    "Euphemism": "the substitution of a mild, indirect, or vague expression for one thought to be offensive, harsh, or blunt",
    "Principle": "a fundamental, primary, or general law or truth from which others are derived",
    "Procure": "to obtain",
    "Enigma": "a mystery",
    "Auspicious": "favorable, noteworthy",
    "Anecdote": "a short account of a particular incident or event of an interesting or amusing nature, often biographical.",
    // Twelfth Grade Vocabulary
    "Conundrum": "a difficult problem",
    "Guru": "religious teacher",
    "Impetuous": "characterized by undue haste and lack of thought or deliberation",
    "Sensuous": "all senses, dealing w/ all senses",
    "Antithesis": "the direct opposite or contrast to a previously given assertion",
    "Chicanery": "deceiving someone, scam",
    "Fortuitous": "occurring by happy chance",
    "Evanescent": "tending to vanish like vapor",
    "Enervate": "to weaken, or to take energy from",
    "Brazen": "unrestrained by convention or propriety",
    "Jovial": "happy, cheery",
    "Benevolent": "showing or motivated by sympathy and understanding and generosity",
    "Hegemony": "one country/group has leadership over another",
    "Deleterious": "harmful to living things",
    "Loquacious": "talkative, chatty",
    "Peruse": "reading with careful attention",
    // Punctuation (DO NOT USE PUNCTUATION QUIZ IT HAS RECURRING QUESTIONS WITH DIFFERENT ANSWERS)
    "A semi-colon is primarily used to:": "Join two connected sentences",
    "Which sentence correctly uses an apostrophe?": "I can't do it, because it is too hard.",
    "Which sentence below uses a comma(s) correctly?": "Megan, who lives next door, loves dogs.",
    "Where does the period go in a sentence?": "At the end",
    "What is the apostrophe's main function?": "Show ownership or posession",
    "Which date below uses a comma correctly?": "January 1st, 2014",
    "Which sentence uses a semi-colon correctly?": "I set out on a quest; the enemies looked fierce.",
    "Quotation marks are used to do what?": "Show speech",
    "Which sentence uses quotation marks correctly?": "Sally said, \"It's time to cook dinner.\"",
    "A period is also used to __________ words.": "Abbreviate",
    "An exclamation mark is often used to express what?": "Excitement",
    "Which of the following is NOT a reason to use an exclamation mark (!) ?": "Boredom",
    "Which sentence correctly uses an apostrophe?": "The horse's tail is so pretty.",
    // Book Quotes
    "\"You don't know about me without you have read a book by the name of 'The Adventures of Tom Sawyer'; but that ain't no matter. That book was made by a Mr Mark Twain, and he told the truth, mainly.\"": "The Adventures of Huckleberry Finn",
    "\"The sky above the port was the color of television, tuned to a dead channel.\"": "Neuromancer",
    "\"All animals are equal, but some animals are more equal than others.\"": "Animal Farm",
    "\"I have been bent and broken, but - I hope - into a better shape.\"": "Great Expectations",
    "\"I'm not afraid of storms, for I'm learning how to sail my ship.\"": "Little Women",
    "\"I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what.\"": "To Kill a Mockingbird",
    "\"All grown-ups were once children - but only few of them remember it.\"": "The Little Prince",
    "\"Call me Ishmael.\"": "Moby Dick",
    "\"Anything worth dying for is certainly worth living for.\"": "Catch-22",
    "\"It was a pleasure to burn.\"": "Farenheit 451",
    "\"Most people were heartless about turtles because a turtle's heart will beat for hours after it has been cut up and butchered. But the old man thought, I have such a heart too.\"": "The Old Man and the Sea",
    "\"Not all those who wander are lost.\"": "The Lord of the Rings",
    "\"In spite of everything I still believe that people are really good at heart\"": "The Diary of Anne Frank",
    "\"It is to the credit of human nature that, except where its selfishness is brought into play, it loves more readily than it hates.\"": "The Scarlet Letter",
    "\"I was benevolent and good; misery made me a fiend. Make me happy, and I shall again be virtuous.\"": "Frankenstein",
    "\"Don't ever tell anybody anything. If you do, you start missing everybody.\"": "The Catcher in the Rye",
    // Famous Poets
    "Who wrote \"Messy Room\"?": "Shel Silverstein",
    "Who wrote \"A Dream Within A Dream\"?": "Edgar Allan Poe",
    "Who wrote \"There is Another Sky\"?": "Emily Dickinson",
    "Who Wrote \"I Carry Your Heart With Me\"?": "E.E. Cummings",
    "Who wrote \"Funeral Blues\"?": "W.H. Auden",
    "Who wrote \"A Girl\"?": "Ezra Pound",
    "Who Wrote \"Let America Be America Again\"?": "Langston Hughes",
    "Who wrote \"If those I loved were lost\"?": "Emily Dickinson",
    "Who Wrote \"If You Forget Me\"?": "Pablo Neruda",
    "Who wrote \"To You\"?": "Walt Whitman",
    "Who wrote \"Where the Sidewalk Ends\"?": "Shel Silverstein",
    "Who wrote \"Phenomenal Woman\"?": "Maya Angelou",
    "Who wrote \"Stopping by the Woods on a Snowy Evening\"?": "Robert Frost",
    "Who wrote \"Do Not Go Gentle To That Good Night\"?": "Dylan Thomas",
    "Who wrote \"Life is Fine\"?": "Langston Hughes",
    "Who wrote \"The Road Not Taken\"?": "Robert Frost",
    // State Capitals
    "What is the capital of Wyoming?": "Cheyenne",
    "What is the capital of Iowa?": "Des Moines",
    "What is the capital of Vermont?": "Montpelier",
    "What is the capital of California?": "Sacramento",
    "What is the capital of Florida?": "Tallahassee",
    "What is the capital of Colorado?": "Denver",
    "What is the capital of South Carolina?": "Columbia",
    "What is the capital of Texas?": "Austin",
    "What is the capital of Massachusetts?": "Boston",
    "What is the capital of Arizona?": "Phoenix",
    "What is the capital of New Hampshire?": "Concord",
    "What is the capital of Louisiana?": "Baton Rouge",
    "What is the capital of North Dakota?": "Bismark",
    "What is the capital of Maryland?": "Annapolis",
    "What is the capital of Montana?": "Helena",
    "What is the capital of Idaho?": "Boise",
    "What is the capital of Hawaii?": "Honolulu",
    "What is the capital of Maine?": "Augusta",
    "What is the capital of Pennsylvania?": "Harrisburg",
    "What is the capital of North Carolina?": "Raleigh",
    "What is the capital of Indiana?": "Indianapolis",
    "What is the capital of Wisconsin?": "Madison",
    "What is the capital of New Jersey?": "Trenton",
    "What is the capital of Nevada?": "Carson City",
    "What is the capital of Tennessee?": "Nashville",
    "What is the capital of Rhode Island?": "Providence",
    "What is the capital of New Mexico?": "Santa Fe",
    "What is the capital of Michigan?": "Lansing",
    "What is the capital of Mississippi?": "Jackson",
    "What is the capital of Georgia?": "Atlanta",
    "What is the capital of Minnesota?": "Saint Paul",
    "What is the capital of Alabama?": "Montgomery",
    "What is the capital of Delaware?": "Dover",
    "What is the capital of Oregon?": "Salem",
    "What is the capital of West Virginia?": "Charleston",
    "What is the capital of Illinois?": "Springfield",
    "What is the capital of Nebraska?": "Lincoln",
    "What is the capital of Kansas?": "Topeka",
    "What is the capital of Utah?": "Salt Lake City",
    "What is the capital of Oklahoma?": "Oklahoma City",
    "What is the capital of Missouri?": "Jefferson City",
    "What is the capital of New York?": "Albany",
    "What is the capital of Kentucky?": "Frankfort",
    "What is the capital of South Dakota?": "Pierre",
    "What is the capital of New Jersey?": "Trenton",
    "What is the capital of Virginia?": "Richmond",
    "What is the capital of Alaska?": "Juneau",
    "What is the capital of Washington?": "Olympia",
    "What is the capital of Arkansas?": "Little Rock",
    "What is the capital of Ohio?": "Columbus"
};

(async () => {
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/book-quotes-trivia";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/ninth-grade-vocabulary-trivia";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/tenth-grade-vocabulary-trivia";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/eleventh-grade-vocabulary-trivia";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/twelfth-grade-vocabulary-trivia";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/famous-poets";
    //const quizLink = "https://www.wizard101.com/quiz/trivia/game/state-capitals-trivia";
    
    for (let attempt = 0; attempt < 10; attempt++) {
        try {
            const browser = await puppeteer.launch({ headless: false });
            const page = await browser.newPage();

            await page.goto(quizLink);
            await new Promise(r => setTimeout(r, 8000));
            console.log(await browser.pages());
            await page.waitForSelector("#loginUserName");
            await page.type("#loginUserName", USERNAME);

            await page.waitForSelector("#loginPassword");
            await page.type("#loginPassword", PASSWORD);
            await new Promise(r => setTimeout(r, 1000));
            await page.click("#wizardLoginButton input[type='submit']");
            await page.waitForNavigation();

            console.log("Logged in successfully!");

            await new Promise(r => setTimeout(r, 1000));

            for (let i = 0; i < 12; i++) { 

                await new Promise(r => setTimeout(r, 6000));
                await page.waitForSelector(".quizQuestion");
                

                const question = await page.$eval(".quizQuestion", el => el.innerText.trim());
                const correctAnswer = answerKey[question];

                if (correctAnswer) {
                    const choices = await page.$$(".answerText");
                    const checkboxes = await page.$$(".largecheckbox");

                    for (let index = 0; index < choices.length; index++) {
                        const text = await page.evaluate(el => el.innerText.trim(), choices[index]);

                        if (text === correctAnswer) {
                            await checkboxes[index].click();
                            break;
                        }
                    }
                }

                await new Promise(r => setTimeout(r, 1000));
                await page.click(".kiaccountsbuttongreen");
            }

            console.log("Quiz completed!");
            await new Promise(r => setTimeout(r, 60000));
            await browser.close();
            break;
        } catch (error) {
            console.log(`Retrying (Attempt ${attempt + 1})...`);
            await new Promise(r => setTimeout(r, 4000));
        }
    }
})();
