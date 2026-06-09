window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script3 = function()
{
  // Access Storyline player
var player = GetPlayer();

// ---- SRT text goes here (like before) ----
var srt_lang1 = `1
00:00:00,000 --> 00:00:02,000
Welcome to cybersecurity training.`;

var srt_lang2 = `1
00:00:00,000 --> 00:00:02,000
欢迎参加网络安全培训。`;


var srt_lang3 = `1
00:00:00,000 --> 00:00:02,000
Willkommen zur Schulung zur Cybersicherheit.`;

// --------- Helpers ---------
function parseSRT(srtText) {
    var captions = [];
    var blocks = srtText.trim().split(/\n\n+/);
    blocks.forEach(function(block) {
        var lines = block.split("\n");
        if (lines.length >= 3) {
            var time = lines[1].split(" --> ");
            var start = toSeconds(time[0]);
            var end = toSeconds(time[1]);
            var text = lines.slice(2).join("\n"); // keep line breaks
            captions.push({ start: start, end: end, text: text });
        }
    });
    return captions;
}

function toSeconds(t) {
    var parts = t.split(/[:,]/);
    return (
        parseInt(parts[0]) * 3600 +
        parseInt(parts[1]) * 60 +
        parseInt(parts[2]) +
        parseInt(parts[3]) / 1000
    );
}

// Parse SRTs
var captions = {
    "Language_1": parseSRT(srt_lang1),
    "Language_2": parseSRT(srt_lang2),
    "Language_3": parseSRT(srt_lang3)
};

// --------- FIX: prevent multiple intervals ---------
if (window.captionInterval) {
    clearInterval(window.captionInterval);
}

window.captionInterval = setInterval(function() {
    var player = GetPlayer();

    // Which language is selected?
    var lang1 = player.GetVar("Language_1");
    var lang2 = player.GetVar("Language_2");
    var lang3 = player.GetVar("Language_3");
    var selectedLang = lang1 ? "Language_1" : lang2 ? "Language_2" : "Language_3";

    // Use Storyline timeline-driven variable instead of Date.now()
    var currentTime = player.GetVar("currentTime"); // this is updated via motion path triggers

    // Default: no caption
    var currentCaption = "";

    captions[selectedLang].forEach(function(line) {
        if (currentTime >= line.start && currentTime <= line.end) {
            currentCaption = line.text;
        }
    });

    player.SetVar("caption", currentCaption);

}, 300); // check ~3x per sec

}

window.Script4 = function()
{
  // Access Storyline player
var player = GetPlayer();

// ---- SRT text goes here (like before) ----
var srt_lang1 = `1
00:00:00,000 --> 00:00:03,200
Cybersecurity, a necessity in today's digital world.

2
00:00:04,000 --> 00:00:08,640
Comprehensive training to navigate the online landscape safely and securely.

3
00:00:08,640 --> 00:00:12,960
Modules cover fundamental concepts, threats, and protective measures.

4
00:00:12,960 --> 00:00:15,600
Enhance understanding of common cyber threats.

5
00:00:16,160 --> 00:00:19,840
Learn practical strategies for protecting yourself and your data.

6
00:00:19,840 --> 00:00:22,959
Confidently respond to potential security incidents.

7
00:00:23,600 --> 00:00:27,200
Safeguard personal and professional information in the digital age.


`;

var srt_lang2 = `1
00:00:00,000 --> 00:00:03,200
網路安全，當今數位世界的必需品。

2
00:00:04,000 --> 00:00:08,640
全面的培訓，助您安全可靠地駕馭網路環境。

3
00:00:08,640 --> 00:00:12,960
模組涵蓋基本概念、威脅和防護措施。

4
00:00:12,960 --> 00:00:15,600
增強對常見網路威脅的理解。

5
00:00:16,160 --> 00:00:19,840
學習保護自己和資料的實用策略。

6
00:00:19,840 --> 00:00:22,959
自信地應對潛在的安全事件。

7
00:00:23,600 --> 00:00:27,200
在數位時代保護個人和專業資訊。`;


var srt_lang3 = `1
00:00:00,000 --> 00:00:03,200
Cybersicherheit ist in der heutigen digitalen Welt unverzichtbar.

2
00:00:04,000 --> 00:00:08,640
Umfassende Schulungen für sicheres Navigieren im Internet.

3
00:00:08,640 --> 00:00:12,960
Die Module behandeln grundlegende Konzepte, Bedrohungen und Schutzmaßnahmen.

4
00:00:12,960 --> 00:00:15,600
Vertiefen Sie Ihr Verständnis gängiger Cyberbedrohungen.

5
00:00:16,160 --> 00:00:19,840
Lernen Sie praktische Strategien zum Schutz Ihrer selbst und Ihrer Daten.

6
00:00:19,840 --> 00:00:22,959
Souverän auf potenzielle Sicherheitsvorfälle reagieren.

7
00:00:23,600 --> 00:00:27,200
Schutz persönlicher und beruflicher Daten im digitalen Zeitalter.`;

// --------- Helpers ---------
function parseSRT(srtText) {
    var captions = [];
    var blocks = srtText.trim().split(/\n\n+/);
    blocks.forEach(function(block) {
        var lines = block.split("\n");
        if (lines.length >= 3) {
            var time = lines[1].split(" --> ");
            var start = toSeconds(time[0]);
            var end = toSeconds(time[1]);
            var text = lines.slice(2).join("\n"); // keep line breaks
            captions.push({ start: start, end: end, text: text });
        }
    });
    return captions;
}

function toSeconds(t) {
    var parts = t.split(/[:,]/);
    return (
        parseInt(parts[0]) * 3600 +
        parseInt(parts[1]) * 60 +
        parseInt(parts[2]) +
        parseInt(parts[3]) / 1000
    );
}

// Parse SRTs
var captions = {
    "Language_1": parseSRT(srt_lang1),
    "Language_2": parseSRT(srt_lang2),
    "Language_3": parseSRT(srt_lang3)
};

// --------- FIX: prevent multiple intervals ---------
if (window.captionInterval) {
    clearInterval(window.captionInterval);
}

window.captionInterval = setInterval(function() {
    var player = GetPlayer();

    // Which language is selected?
    var lang1 = player.GetVar("Language_1");
    var lang2 = player.GetVar("Language_2");
    var lang3 = player.GetVar("Language_3");
    var selectedLang = lang1 ? "Language_1" : lang2 ? "Language_2" : "Language_3";

    // Use Storyline timeline-driven variable instead of Date.now()
    var currentTime = player.GetVar("currentTime"); // this is updated via motion path triggers

    // Default: no caption
    var currentCaption = "";

    captions[selectedLang].forEach(function(line) {
        if (currentTime >= line.start && currentTime <= line.end) {
            currentCaption = line.text;
        }
    });

    player.SetVar("caption", currentCaption);

}, 300); // check ~3x per sec

}

window.Script5 = function()
{
  // Access Storyline player
var player = GetPlayer();

// ---- SRT text goes here (like before) ----
var srt_lang1 = `1
00:00:00,000 --> 00:00:05,040
This cybersecurity training program is designed to help you equip yourself with the knowledge and skills necessary to

2
00:00:05,040 --> 00:00:08,160
navigate the digital world safely and securely.

3
00:00:08,960 --> 00:00:14,080
Define cybersecurity and understand its importance in today's connected world.

4
00:00:14,800 --> 00:00:21,280
Identify common cyber threats, including malware, phishing, ransomware, and social engineering.

5
00:00:21,280 --> 00:00:27,440
strategies. Create strong, unique passwords and use multi-factor authentication.

6
00:00:28,000 --> 00:00:33,279
Use multi-factor authentication (MFA) to enhance your online security. Practice secure internet and email.

7
00:00:33,279 --> 00:00:38,480
Develop good habits to minimize the risk of cyberattacks. Protect your personal devices.

8
00:00:38,480 --> 00:00:42,080
And learn about workplace cybersecurity best practices.

9
00:00:42,720 --> 00:00:48,240
Learn how to report suspicious activity and take appropriate action in the event of a security incident.

10
00:00:48,240 --> 00:00:49,360
Incidents.`;

var srt_lang2 = `1
00:00:00,000 --> 00:00:05,040
本網路安全培訓計畫旨在幫助您掌握必要的知識和技能，

2
00:00:05,040 --> 00:00:08,160
安全可靠地暢遊數位世界。

3
00:00:08,960 --> 00:00:14,080
定義網路安全並理解其在當今互聯世界中的重要性。

4
00:00:14,800 --> 00:00:21,280
識別常見的網路威脅，包括惡意軟體、網路釣魚、勒索軟體和社會工程。

5
00:00:21,280 --> 00:00:27,440
策略。建立強大且獨特的密碼，並使用多重身份驗證。

6
00:00:28,000 --> 00:00:33,279
使用多重身份驗證 (MFA) 增強您的線上安全。確保網路和電子郵件安全。

7
00:00:33,279 --> 00:00:38,480
養成良好的習慣，最大限度地降低網路攻擊風險。保護您的個人設備。

8
00:00:38,480 --> 00:00:42,080
並了解工作場所網路安全的最佳實務。

9
00:00:42,720 --> 00:00:48,240
了解如何報告可疑活動並在發生安全事件時採取適當措施。

10
00:00:48,240 --> 00:00:49,360
事故。`;


var srt_lang3 = `1
00:00:00,000 --> 00:00:05,040
Dieses Cybersicherheits-Trainingsprogramm vermittelt Ihnen das notwendige Wissen und die notwendigen Fähigkeiten, um

2
00:00:05,040 --> 00:00:08,160
sicher und geschützt in der digitalen Welt zu navigieren.

3
00:00:08,960 --> 00:00:14,080
Cybersicherheit definieren und ihre Bedeutung in der heutigen vernetzten Welt verstehen.

4
00:00:14,800 --> 00:00:21,280
Häufige Cyberbedrohungen wie Malware, Phishing, Ransomware und Social Engineering identifizieren.

5
00:00:21,280 --> 00:00:27,440
Strategien. Erstellen Sie sichere und einzigartige Passwörter und nutzen Sie die Multi-Faktor-Authentifizierung.

6
00:00:28,000 --> 00:00:33,279
Nutzen Sie die Multi-Faktor-Authentifizierung (MFA), um Ihre Online-Sicherheit zu verbessern. Sorgen Sie für Web- und E-Mail-Sicherheit.

7
00:00:33,279 --> 00:00:38,480
Entwickeln Sie gute Gewohnheiten, um das Risiko von Cyberangriffen zu minimieren. Schützen Sie Ihre privaten Geräte.

8
00:00:38,480 --> 00:00:42,080
Und informieren Sie sich über Best Practices zur Cybersicherheit am Arbeitsplatz.

9
00:00:42,720 --> 00:00:48,240
Erfahren Sie, wie Sie verdächtige Aktivitäten melden und im Falle eines Sicherheitsvorfalls geeignete Maßnahmen ergreifen.

10
00:00:48,240 --> 00:00:49,360
Vorfälle.`;

// --------- Helpers ---------
function parseSRT(srtText) {
    var captions = [];
    var blocks = srtText.trim().split(/\n\n+/);
    blocks.forEach(function(block) {
        var lines = block.split("\n");
        if (lines.length >= 3) {
            var time = lines[1].split(" --> ");
            var start = toSeconds(time[0]);
            var end = toSeconds(time[1]);
            var text = lines.slice(2).join("\n"); // keep line breaks
            captions.push({ start: start, end: end, text: text });
        }
    });
    return captions;
}

function toSeconds(t) {
    var parts = t.split(/[:,]/);
    return (
        parseInt(parts[0]) * 3600 +
        parseInt(parts[1]) * 60 +
        parseInt(parts[2]) +
        parseInt(parts[3]) / 1000
    );
}

// Parse SRTs
var captions = {
    "Language_1": parseSRT(srt_lang1),
    "Language_2": parseSRT(srt_lang2),
    "Language_3": parseSRT(srt_lang3)
};

// --------- FIX: prevent multiple intervals ---------
if (window.captionInterval) {
    clearInterval(window.captionInterval);
}

window.captionInterval = setInterval(function() {
    var player = GetPlayer();

    // Which language is selected?
    var lang1 = player.GetVar("Language_1");
    var lang2 = player.GetVar("Language_2");
    var lang3 = player.GetVar("Language_3");
    var selectedLang = lang1 ? "Language_1" : lang2 ? "Language_2" : "Language_3";

    // Use Storyline timeline-driven variable instead of Date.now()
    var currentTime = player.GetVar("currentTime"); // this is updated via motion path triggers

    // Default: no caption
    var currentCaption = "";

    captions[selectedLang].forEach(function(line) {
        if (currentTime >= line.start && currentTime <= line.end) {
            currentCaption = line.text;
        }
    });

    player.SetVar("caption", currentCaption);

}, 300); // check ~3x per sec

}

window.Script6 = function()
{
  // Access Storyline player
var player = GetPlayer();

// ---- SRT text goes here (like before) ----
var srt_lang1 = `1
00:00:00,000 --> 00:00:05,520
Phishing. Deceptive attempts to acquire sensitive information such as usernames,

2
00:00:05,520 --> 00:00:12,480
passwords, and credit card details by masquerading as a trustworthy entity in electronic communication.`;

var srt_lang2 = `1
00:00:00,000 --> 00:00:05,520
網路釣魚。透過在電子通訊中冒充受信任的實體，試圖欺詐性地取得使用者名稱、

2
00:00:05,520 --> 00:00:12,480
密碼和信用卡資訊等機密資訊。`;


var srt_lang3 = `1
00:00:00,000 --> 00:00:05,520
Phishing. Betrügerische Versuche, an vertrauliche Informationen wie Benutzernamen,

2
00:00:05,520 --> 00:00:12,480
Passwörter und Kreditkartendaten zu gelangen, indem sich Angreifer in der elektronischen Kommunikation als vertrauenswürdige Instanz ausgeben.`;

// --------- Helpers ---------
function parseSRT(srtText) {
    var captions = [];
    var blocks = srtText.trim().split(/\n\n+/);
    blocks.forEach(function(block) {
        var lines = block.split("\n");
        if (lines.length >= 3) {
            var time = lines[1].split(" --> ");
            var start = toSeconds(time[0]);
            var end = toSeconds(time[1]);
            var text = lines.slice(2).join("\n"); // keep line breaks
            captions.push({ start: start, end: end, text: text });
        }
    });
    return captions;
}

function toSeconds(t) {
    var parts = t.split(/[:,]/);
    return (
        parseInt(parts[0]) * 3600 +
        parseInt(parts[1]) * 60 +
        parseInt(parts[2]) +
        parseInt(parts[3]) / 1000
    );
}

// Parse SRTs
var captions = {
    "Language_1": parseSRT(srt_lang1),
    "Language_2": parseSRT(srt_lang2),
    "Language_3": parseSRT(srt_lang3)
};

// --------- FIX: prevent multiple intervals ---------
if (window.captionInterval) {
    clearInterval(window.captionInterval);
}

window.captionInterval = setInterval(function() {
    var player = GetPlayer();

    // Which language is selected?
    var lang1 = player.GetVar("Language_1");
    var lang2 = player.GetVar("Language_2");
    var lang3 = player.GetVar("Language_3");
    var selectedLang = lang1 ? "Language_1" : lang2 ? "Language_2" : "Language_3";

    // Use Storyline timeline-driven variable instead of Date.now()
    var currentTime = player.GetVar("currentTime"); // this is updated via motion path triggers

    // Default: no caption
    var currentCaption = "";

    captions[selectedLang].forEach(function(line) {
        if (currentTime >= line.start && currentTime <= line.end) {
            currentCaption = line.text;
        }
    });

    player.SetVar("caption", currentCaption);

}, 300); // check ~3x per sec

}

};
