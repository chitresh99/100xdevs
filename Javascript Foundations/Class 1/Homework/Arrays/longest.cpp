#include <iostream>
using namespace std;

int main() {
    int array[5] = {6, 2, 3, 4, 5};
    int max = array[0]; // Initialize max with the first element of the array

    for (int i = 1; i < 5; i++) { // Start from the second element
        if (array[i] > max) {
            max = array[i]; // Update max if the current element is greater
        }
    }

    cout << "The greatest element is: " << max << endl;

    return 0;
}

//even if the first element is greater than the rest of the elements the code will compare the rest of the
// elements with max
