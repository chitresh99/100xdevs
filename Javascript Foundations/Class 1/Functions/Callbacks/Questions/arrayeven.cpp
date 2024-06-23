#include <iostream>
using namespace std;

int main() {
    int array[4] = {1, 2, 3 ,4};

    cout << "Even numbers: ";
    // Loop through the original array
    for (int i = 0; i < 4; i++) {
        // Check if the element is even
        if (array[i] % 2 == 0) {
            cout << array[i] << " "; // Output the even element
        }
    }

    cout << endl;

    return 0;
}
