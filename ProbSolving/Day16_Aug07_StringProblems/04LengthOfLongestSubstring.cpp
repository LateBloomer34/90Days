#include<iostream>
using namespace std;

int subStr(string s){
    int n = s.size();
    // cerate a empty vector of 26 size to store frequnency of elements
    vector<int>count(256 , 0);
    // use 2 pointer
    int first = 0 ;
    int second = 1;
    int maxLen = 0;
    // let frequency of first element of string is one
    count[s[first]-'a']=1;

    // iterate till second is less than size of string
    while(second<n){
        while(count[s[second] - 'a']){    //  If character already in window, shrink from the left
            // ex - if a character is avavilable or comes before, value updated qith 1 , so move first to right side
            count[s[first]-'a'] = 0;
            first++;
        }
      
        count[s[second]-'a'] = 1; // mark second with 1
        maxLen = max (maxLen , second-first+1);  // max length of substring
        second++;  // increse second pointer till less thn size of array
    }
return maxLen;
}

int main (){
    string s = "champawat";
    cout<<subStr(s);
}