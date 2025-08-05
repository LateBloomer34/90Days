#include<iostream>
using namespace std;

string removeParen(string s){
        int n = s.size();
        string result;
        int count = 0 ;
            for (int i = 0 ; i < n ; i++){
                    if (s[i]=='('){
                        count++;
                        if (count>1){
                            result.push_back(s[i]);
                        }
                    }
                    else{
                         count--;
                         if (count>=1){
                         result.push_back(')');
                }
                    }
            }
  return result;      
}

int main (){
    string s =  "(()())(())";
    cout<<removeParen(s);
}