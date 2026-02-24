/**
 * Check whether Npocham can use keigo (honorific language / んぽちゃむは敬語を使えるのか確認する)
 */
function can_use_keigo(): string {
    return "無理ちゃむ";
}

export { can_use_keigo };

// Run when executed directly: npx ts-node npocham.ts
if (require.main === module) {
    console.log(can_use_keigo());
}
