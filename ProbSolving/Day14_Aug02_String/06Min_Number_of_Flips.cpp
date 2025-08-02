#include<iostream>
using namespace std;

int min_flip(string arr ){
    int n = arr.size();
    if (n<=1){
        return 0;
    }
    
    int flip = 0 ; 
    int minFlip = 0 ;
    int steps= 0;
    for (int i = 0 ; i < n-1 ; i++){
        if (arr[i]==arr[i+1]){
            if (arr[i]=='0'){
                arr[i+1]='1';
                steps++;
            }
            else{
                arr[i+1]='0';
                steps++;
            }
        }
    }
    int stepRev = 0 ;
    for (int i = n-1 ; i>=1 ; i--){
        if (arr[i]==arr[i-1]){
            if (arr[i-1]=='1'){
                arr[i-1]='0';
                stepRev++;
            }
            else{
                arr[i-1]='1';
                stepRev++;
            }
        }
    }
    minFlip = min (stepRev , steps);
return minFlip;
}

int main (){
    string arr = "110110";
    cout<<min_flip(arr);
}