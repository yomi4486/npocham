#include <iostream>
#include <string>

/**
 * Check whether Npocham can use keigo (honorific language / んぽちゃむは敬語を使えるのか確認する)
 */
std::string can_use_keigo() {
    return "無理ちゃむ";
}

int main() {
    std::cout << can_use_keigo() << std::endl;
    return 0;
}
