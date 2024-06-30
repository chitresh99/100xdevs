#include <iostream>
using namespace std;

int greatestel(int arr[],int size){

    int greatest = arr[0];
    int indexofgreatest = 0;

    for(int i=1;i<size;i++){
       if(arr[i] > greatest){
         greatest = arr[i];
        //  indexofgreatest = i;
       };
    }
    return greatest;
}

int main ( ) {

    int arr[5] = {1,2,3,4,6};
    int size{5};

    int ans = greatestel(arr,5);
    cout<<ans<<endl; //rightnow returns the index of greatest elemnet
}