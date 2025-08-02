#include<iostream>
using namespace std;

bool pelindrome(string s){
    int n = s.size();

    char start = 0;
    char end = n-1;
    
    while(start<end){
        if (s[start]==s[end]){
            start++;
            end--;
        }
        else{
            return false;
        }
    }
    return true;
}

int main (){
    string s = "abc";
    pelindrome(s);
    if (pelindrome(s)){
        cout<<"string is pelindrome";
    }
    else{
        cout<<"string not pelindrome";
    }
}