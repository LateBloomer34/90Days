#include<iostream>
using namespace std;

int substringLen(string s){
        int maxLen = 1;
        int n = s.size();
// create a vector of 26 size with all value 0
        vector<int>count(26 , 0);

        // initilize 2 variabel 
        int first = 0 ; 
        int second = 1;
    // update the index of first's element in count array; // means frequency update
        count[s[first] - 'a']++;
    

        //iterate array till second is less than length of array
        while(second<n){
            while(count[s[second]-'a']){
            count[s[first]-'a']=0;
            first++;
            } 
            count[s[second]-'a'] =1;
            maxLen = max(maxLen , second-first+1);
            second++;
        }
    
    return maxLen;
}

int main (){
    string s = "himanshu";
   cout<< substringLen(s);
}