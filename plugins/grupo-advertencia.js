const handler = async (m, { conn, text, command, usedPrefix }) => {
// if (m.mentionedJid.includes(conn.user.jid)) return; // Evitar advertir al bot mismo
const pp = './src/logo6.png'
let number, ownerNumber, aa, who;
if (m.isGroup) { 
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text; 
} else who = m.chat;
  const user = global.db.data.users[who];
  const usuario = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason 
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*🌷 𝐸𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎 𝑢𝑛𝑎 𝑝𝑒𝑟𝑠𝑜𝑛𝑎 𝑜 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑎 𝑎 𝑢𝑛 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑑𝑒𝑙 𝑔𝑡𝑢𝑝𝑜 𝑝𝑎𝑟𝑎 𝑎𝑑𝑣𝑒𝑡𝑡𝑖𝑟 𝑎𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜_°`;
  if (!who) {
return m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  }

for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (usuario.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `…`, m, { mentions: [aa] })
return
}}

  user.warn += 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 🍨➳ 𝑅𝑒𝑐𝑖𝑏𝑖𝑜 𝑢𝑛𝑎 𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 𝑑𝑒 𝑒𝑠𝑡𝑒 𝑔𝑡𝑢𝑝𝑜!.\n 𝑀𝑜𝑡𝑖𝑣𝑜: ${sdms}\n*𝐴𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎𝑠: ${user.warn}/3*`, null, { mentions: [who] },
  );
  if (user.warn >= 3) {
    user.warn = 0;
    await m.reply(`Te lo adverti varias veces!!!.\n*@${who.split`@`[0]}* Superaste las *3* advertencias, ahora seras eliminado/a.`, null, { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = ['advertir', 'advertencia', 'warn', 'warning'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
