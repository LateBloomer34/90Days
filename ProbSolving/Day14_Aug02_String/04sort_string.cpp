#include<iostream>
using namespace std;

int main (){
  string s = "himanshu";
    vector<int>arr(26, 0);
    for (int i = 0 ;i < s.size(); i++){
            int pos = int(s[i]-97);
            // cout<<pos<<" "<<endl;
            arr[pos]++;
    }

    for (int i = 0 ; i < arr.size() ; i++){
        if (arr[i]>0){
            for (int j = 0 ; j < arr[i]; j++){
                cout<<char(97+i)<<"";
            }
        }
    }
   
}