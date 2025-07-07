#include<iostream>
using namespace std;

int maxProfit(vector<int>arr){
        int n = arr.size();
        int profit = arr[0];
        int maxPro = 0;
        if (n <= 1){
            maxPro =  profit;
        }
        else{
        for (int i = 1 ; i < n ; i++){
            profit = profit*arr[i];
            if (profit ==0){
                profit = arr[i];
            }
            maxPro = max(maxPro, profit);
        }
    }
return maxPro;
}

int main (){
    vector<int>arr = {1,2,-3,0,-4,-5};
    cout<<maxProfit(arr);
}