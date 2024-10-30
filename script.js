console.log("script.js loaded");

const loveNotes = [
    "Zahra, you are the sunshine of my life 🌞",
    "Every moment with you feels like a beautiful dream 💫",
    "You are my forever and always, Zahra ❤️",
    "Life is more colorful and joyful with you by my side 🎨",
    "You fill my heart with love and happiness 💖",
    "To the love of my life, Zahra – I cherish every moment with you 🥰",
    "I love you more than words can express, Zahra 💌",
    "Being with you makes everything feel perfect 🌹",
    "Thank you for being my partner, my friend, and my love 🌷",
    "Zahra, you complete me in every way possible 💍",
    "When I look at you, I see my forever ❤️",
    "Every love song I hear reminds me of you 🎶",
    "I am so grateful to have you in my life, Zahra 🌺",
    "You have the kindest heart, and I’m lucky to be the one you chose 💕",
    "I could search a lifetime and never find someone as wonderful as you 💖",
    "With you, I've found my home 🏠",
    "You inspire me to be a better person every day 🌟",
    "Our love story is my favorite one 💖",
    "I fall in love with you a little more every day 🌷",
    "No matter where life takes us, I’ll always love you endlessly 💞",
    "Thank you for making every day brighter 🌞",
    "In your eyes, I find my happiness 💫",
    "You are my soulmate, my best friend, my everything 💕",
    "Loving you is the best decision I’ve ever made 💖",
    "Forever isn't long enough when I'm with you 💍",
    "You are my heart's delight, and I am so proud to be yours 🌹",
    "Your smile lights up my world like nothing else 💖",
    "I’ll love you through every sunrise and every sunset 🌅",
    "Zahra, you are my heart, my world, my everything 💘",
    "Your love is my greatest blessing 🌈",
    "Every time I see you, I fall in love all over again ❤️",
    "With you, I have everything I need in life 💖",
    "Thank you for making every moment magical ✨",
    "Being yours forever is my dream come true 💍",
    "I am the luckiest person on earth because I have you 💖",
    "Loving you is my favorite thing to do ❤️",
    "You're the best part of my life, Zahra 🌸",
    "You make my heart smile 😊",
    "The world is more beautiful with you in it 🌷",
    "I’m so lucky to love you and to be loved by you 💕",
    "You are my muse, my love, my everything 🎨",
    "Every adventure with you feels like a fairytale 🌹",
    "Zahra, just seeing you makes my day infinitely better 💖",
    "You have a magic about you that fills my heart with joy ✨",
    "I could write a thousand love letters, but they’d never capture what you mean to me 💌",
    "I love you more deeply with each passing moment 💘",
    "With you, life is full of laughter, love, and endless happiness ❤️",
    "You are my one and only, Zahra, and I will cherish you forever 💍",
    "محبت تم سے اس قدر ہے کہ میں خود سے بھی بے خبر ہوں ❤️",
    "تمہیں پا کر میری دنیا مکمل ہو گئی، جیسے خزاں میں بہار آئی 💐",
    "زندگی کے ہر لمحے میں، میری دعا ہو تم 💞",
    "میرے دل کی ہر دھڑکن تمہارے نام سے ہے 💖",
    "محبت ہے تم سے، میری ہر سانس میں تم ہو 🌹",
    "In your love, I find peace and strength, a quiet calm in a chaotic world 🌌",
    "Tum meri zindagi ka wo haseen raaz ho jo kabhi na khatam ho 💍",
    "My heart is at home whenever I’m with you 🏠",
    "جب سے تم میری زندگی میں آئے ہو، ہر دن عید ہے 💕",
    "تمہاری مسکراہٹ میری زندگی کا سب سے قیمتی خزانہ ہے 😊",
    "تُو ہے تو زندگی حسین ہے، تُو نہ ہو تو کچھ بھی نہیں ❤️",
    "Meri har dua mein tum ho, meri har khushi ka sabab tum ho 💫",
    "You are the poetry in my heart, the melody in my soul 🎶",
    "زندگی تم سے ہے، اور تم میری زندگی ہو 🌹",
    "Tum meri zindagi ki woh kahani ho jo har din nayi lagti hai ❤️",
    "To be loved by you is a blessing I’ll cherish forever 💘",
    "Jab tum mere saath ho, duniya ki har cheez be-mani lagti hai 🌍",
    "You are my light, my guide, my love, my forever ❤️",
    "Every heartbeat whispers your name 💖",
    "Tum mere khawab ho, jo hamesha mere saath rahte hain 🌙",
    "If love is a journey, I’ll walk a million miles to be with you 💕",
    "Tere ishq mein meri har ghadi hai rangon se bhari ❤️",
    "Kabhi khamoshi se, kabhi baaton se tum mere dil mein basti ho 💖",
    "Tum jo paas ho, har din ek nayi kahani lagti hai 💕",
    "Your presence in my life is like a beautiful melody that never fades 🎶",
    "Tum ho toh har khushi, har raat suhani lagti hai 💫",
    "Pyar tumse hai, aur tum hi se meri har khushi hai 🌹",
    "You are my favorite place to go when my mind searches for peace 🌸",
    "Tere sang guzarta har lamha, zindagi ka khoobsurat safar lagta hai 🌈",
    "Aankhon mein tere sapne, aur dil mein teri yaadein hain ❤️",
    "Zindagi tere sang poori, tumhare bina adhoori lagti hai 💔",
    "Tum mere dil ka wo raaz ho, jo sirf tum samajh sakti ho 🌹",
    "Mujhe tum mein apna aashiyana mil gaya hai 🏠",
    "Jis pal mein tum ho, wo pal hamesha ke liye kaash ruk jaye 💫",
    "Tumhara saath mere liye ek khubsurat dua hai 💕",
    "You are the reason for my smile, the cause of my happiness 😊",
    "Tum ho toh har pal suhana, har raat chandni hai 🌙",
    "Tumse pyar karna mere dil ka sabse khoobsurat ehsaas hai ❤️",
    "Tumhari khushbu se mera dil aur yeh zindagi mahek uthti hai 🌸",
    "I love you not only for what you are, but for what I am when I’m with you 💕",
    "Tum wo sitare ho jo har raat mere dil ko chamkate hain ⭐",
    "In your love, I have found my forever, my always 💍",
    "Meri har dua tumse hai, aur tum mere liye ek khaas dua ho 🌹",
    "Tere saath zindagi ka safar khoobsurat aur mehfooz hai 🛤️"
];
function showLoveNote() {
    const noteElement = document.getElementById("note");

    // Generate a random love note
    const randomIndex = Math.floor(Math.random() * loveNotes.length);
    const message = loveNotes[randomIndex];

    // Reset the text content
    noteElement.textContent = "";

    let charIndex = 0;

    // Typewriter function
    function typeCharacter() {
        if (charIndex < message.length) {
            noteElement.textContent += message[charIndex];
            charIndex++;
            setTimeout(typeCharacter, 100); // Adjust speed here
        }
    }
    typeCharacter();
}

