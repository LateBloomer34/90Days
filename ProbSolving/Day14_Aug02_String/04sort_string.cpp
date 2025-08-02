#include<iostream>
using namespace std;

int main (){
  string s = "himanshu";
    vector<int>arr(26, 0);
    for (int i = 0 ;i < s.size(); i++){
            int pos = int(s[i]-'a');
            // cout<<pos<<" "<<endl;
            arr[pos]++;
    }
    
    // in ascending dictionary order
    for (int i = 0 ; i < arr.size() ; i++){
        if (arr[i]>0){ 
            for (int j = 0 ; j < arr[i]; j++){
                cout<<char('a'+i)<<"";
            }
        }
    }
cout<<endl;
    // in reverse order
     for (int i= arr.size()-1  ; i >= 0 ; i--){
        if (arr[i]>0){ 
            for (int j = 0 ; j < arr[i]; j++){
                cout<<char('a'+i)<<"";
            }
        }
    }
   
}