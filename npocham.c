#include <stdio.h>

/* Check whether Npocham can use keigo (honorific language / んぽちゃむは敬語を使えるのか確認する) */
const char *can_use_keigo() {
    return "無理ちゃむ";
}

int main() {
    printf("%s\n", can_use_keigo());
    return 0;
}
