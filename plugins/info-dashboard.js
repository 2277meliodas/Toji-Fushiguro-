let handler = async (m, { conn, command }) => {

    if (command == 'dash' || command == 'dashboard' || command == 'views') {
        let stats = Object.entries(db.data.stats).map(([key, val]) => {
            let name = Array.isArray(plugins[key]?.help) ? plugins[key]?.help?.join(' , ') : plugins[key]?.help || key 

            if (/exec/.test(name)) return
            return { name, ...val }
        })

        stats = stats.sort((a, b) => b.total - a.total)
        var handlers = stats.slice(0, 10).map(({ name, total }) => {
            return `⬡ *Comando* : *${name}*\n⬡ *Usos* : ${total}`
        }).join('\n\n')

        conn.reply(m.chat, handlers, m, fake)
    }

    if (command == 'database' || command == 'usuarios' || command == 'user') {
        let totalreg = Object.keys(global.db.data.users).length
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

        conn.reply(m.chat, `
🗂️ *𝑇𝑒𝑛𝑔𝑜 ${rtotalreg} 𝑈𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑒𝑛 𝑚𝑖 𝑏𝑎𝑠𝑒 𝑑𝑒 𝑑𝑎𝑡𝑜𝑠_°*

📂 *${totalreg} 𝑁𝑜 𝑒𝑠𝑡𝑎𝑛 𝑟𝑒𝑔𝑖𝑠𝑡𝑟𝑎𝑑𝑜𝑠_°*`, m, rcanal)
    }

}

handler.help = ['dash', 'dashboard', 'views', 'database', 'usuarios', 'user']
handler.tags = ['info']
handler.command = ['dashboard', 'dash', 'views', 'database', 'usuarios', 'user']

handler.register = true

export default handler
