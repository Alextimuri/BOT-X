




const os = require('os');
const moment = require("moment-timezone");
const Config = require("../config");
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix } = require("../lib");
const Secktor = require("../lib/commands");

Secktor.cmd({
  'pattern': "help",
  'alias': ["menu"],
  'desc': "Help list",
  'category': "general",
  'react': '⏳',
  'filename': __filename
}, async (_0x41fa70, _0x22e548, _0x44e062) => {
  const { commands: _0x547bb5 } = require('../lib');
  if (_0x44e062.split(" ")[0x0]) {
    let _0x29797f = [];
    const _0x1297b6 = _0x547bb5.find(_0x4f444d => _0x4f444d.pattern === _0x44e062.split(" ")[0x0].toLowerCase());
    if (!_0x1297b6) {
      return await _0x22e548.reply("*❌ No Such commands.*");
    } else {
      _0x29797f.push("*Command:* " + _0x1297b6.pattern);
    }
    if (_0x1297b6.category) {
      _0x29797f.push("*Category:* " + _0x1297b6.category);
    }
    if (_0x1297b6.alias) {
      _0x29797f.push("*Alias:* " + _0x1297b6.alias);
    }
    if (_0x1297b6.desc) {
      _0x29797f.push("*Description:* " + _0x1297b6.desc);
    }
    if (_0x1297b6.use) {
      _0x29797f.push("*Usage:* `" + prefix + _0x1297b6.pattern + " " + _0x1297b6.use + "`");
    }
    return await _0x22e548.reply(_0x29797f.join("\n"));
  } else {
    const _0x185d93 = {};
    _0x547bb5.map(async (_0x1563c7) => {
      if (_0x1563c7.dontAddCommandList === false && _0x1563c7.pattern !== undefined) {
        if (!_0x185d93[_0x1563c7.category]) {
          _0x185d93[_0x1563c7.category] = [];
        }
        _0x185d93[_0x1563c7.category].push(_0x1563c7.pattern);
      }
    });
    moment.tz.setDefault("Asia/Kolkata").locale('id');
    let _0x2ce686 = "╭────《 " + fancytext(Config.ownername.split(" ")[0x0], 0x3a) + " 》─────⊷\n";
    _0x2ce686 += '```' + ("│ ╭──────────────◆\n│ │   :- " + _0x22e548.pushName + "\n│ │  :- \n│ │    :- [ " + prefix + " ]\n│ │  :- " + Config.ownername + "\n│ │  ⏰:- " + runtime(process.uptime()) + "\n│ │ , :- " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n│ ╰──────────────◆\n╰───────────────⊷\n\n") + "```";
    for (const _0x32ef0c in _0x185d93) {
      _0x2ce686 += "╭────⭐ *" + tiny(_0x32ef0c) + "* ⭐\n";
      for (const _0x14efca of _0x185d93[_0x32ef0c]) {
        _0x2ce686 += "│ " + fancytext(_0x14efca, 0x1) + "\n";
      }
      _0x2ce686 += "╰━━━━━━━━━━━━━━──⊷\n";
    }
    _0x2ce686 += "⭐┃sᴛᴀʀ  ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ\n\n   ⭐ ";
    let _0x41763e = {
      'image': {
        'url': await botpic()
      },
      'caption': _0x2ce686
    };
    return await _0x41fa70.sendMessage(_0x22e548.chat, _0x41763e);
  }
});


});
Secktor.cmd({
  'pattern': "owner",
  'desc': "To find 👨‍💻owner number",
  'category': "general",
  'react': '👑',
  'filename': __filename
}, async (_0x2d6a3a, _0x5ad307) => {
  const _0x5dd43a = require("../config");
  const _0x42bbad = "BEGIN:VCARD\n🔰VERSION:2.0\nFN:" + _0x5dd43a.ownername + "\n" + "ORG:;\n" + 'TEL;type=CELL;type=VOICE;waid=' + owner[0x0] + ':+' + owner[0x0] + "\n" + "END:VCARD";
  let _0x51aa36 = {
    'contacts': {
      'displayName': _0x5dd43a.ownername,
      'contacts': [{
        'vcard': _0x42bbad
      }]
    },
    'contextInfo': {
      'externalAdReply': {
        'title': _0x5dd43a.ownername,
        'body': "Touch here.",
        'renderLargerThumbnail': true,
        'thumbnailUrl': '',
        'thumbnail': log0,
        'mediaType': 0x2,
        'mediaUrl': '',
        'sourceUrl': 'https://wa.me/+2347045035241' + "?text=Hii bro,I am " + _0x5ad307.pushName
      }
    }
  };
  return await _0x2d6a3a.sendMessage(_0x5ad307.chat, _0x51aa36, {
    'quoted': _0x5ad307
  });
});
Secktor.cmd({
  'pattern': "file",
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': "general",
  'react': '✅',
  'filename': __filename
}, async (_0x20f3fd, _0x4d0179, _0x332fad) => {
  const {
    commands: _0x1fd1a0
  } = require("../lib");
  let _0x5f3515 = [];
  const _0x57258d = _0x1fd1a0.find(_0x446063 => _0x446063.pattern === _0x332fad.split(" ")[0x0].toLowerCase());
  if (!_0x57258d) {
    return await _0x4d0179.reply("*❌No Such commands.*");
  } else {
    _0x5f3515.push("*🍁Command:* " + _0x57258d.pattern);
  }
  if (_0x57258d.category) {
    _0x5f3515.push("*🧩Type:* " + _0x57258d.category);
  }
  if (_0x57258d.filename) {
    _0x5f3515.push("✨FileName: " + _0x57258d.filename);
  }
  return _0x4d0179.reply(_0x5f3515.join("\n"));
});