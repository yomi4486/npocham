/**
 * Check whether Npocham can use keigo (honorific language / んぽちゃむは敬語を使えるのか確認する)
 * @returns {string}
 */
function can_use_keigo() {
    return "無理ちゃむ";
}

if (require.main === module) {
    console.log(can_use_keigo());
}

module.exports = { can_use_keigo };
