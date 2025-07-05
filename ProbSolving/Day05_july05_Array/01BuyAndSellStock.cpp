#include<iostream>
using namespace std;


// brute approack - find the difference of element 
/*
int buy_Sell_Stock(vector<int>arr){
    int n = arr.size();
    int max_Profit =0;
for (int i = 0 ; i < n-1; i++){
    for (int j = i+1 ; j<n ; j++ ){
        int profit = arr[j] - arr[i];
        max_Profit = max(max_Profit, profit);
    }
}
return max_Profit;
}
*/

// optimal approach -  using sinle loop- find profit and max profit with compare

int buy_Sell_Stock(vector<int>arr){
        int n = arr.size();
        int min_Price = INT_MAX;
        int maxProfit = 0;
        for (int i = 0 ; i < n ; i++){
            min_Price  = min(arr[i] , min_Price);
            maxProfit = max(maxProfit, arr[i]-min_Price);
        }
  return maxProfit;      
}

int main (){
    vector<int>arr = {7,2,5,3,6,1,4};
    cout<<buy_Sell_Stock(arr);
}
