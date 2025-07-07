#include<iostream>
using namespace std;

int product (vector<int>arr){
    int n = arr.size();
    int product =1;
    int maxProduct = arr[0];
    for (int i = 0 ; i < n ; i++){
        product = product*arr[i];
        maxProduct = max(product , maxProduct);
        if (product==0){
            product = 1;
        }
    }
return maxProduct;
}

int main (){
    vector<int>arr = {1,2,-3,0,-4,-5};
    cout<<product(arr);
}