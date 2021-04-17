using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExcercises.Algorithms
{
    public  class StringsAlgorithms
    {
        public static bool HasUniqueChars(string givenString)
        {
            if (givenString is null)
            {
                throw new ArgumentNullException(nameof(givenString));
            }
            for (int i = 0; i < givenString.Length-1; i++)
            { 
                for(int j=i;j< givenString.Length-1;j++)
                {
                    if (givenString[i] == givenString[j])
                    {
                        return false;
                    }
                }
            }
            return true;
        }

        public static bool HasAllUniqueChar(string givenString)
        {
            Dictionary<char, int> uniqueCharDictonary = new Dictionary<char, int>();
            for(int i = 0; i < givenString.Length; i++)
            {
                if (uniqueCharDictonary.ContainsKey(givenString[i]))
                {
                    return false;
                }
                else
                {
                    uniqueCharDictonary.Add(givenString[i], i);
                }
            }
            return true;
        }


        public char[] StringToList(string givensString)
        {
            char[] list = new char[givensString.Length];
 
            for (int i = 0; i < givensString.Length; i++)
            {
                list[i] = givensString[i];
            }
            return list;
        }


        public static string GetStringWithReplacedSpace(string givenString)
        {
            StringBuilder returnString = new StringBuilder();
            for(int i = 0; i < givenString.Length; i++)
            {
                if (givenString[i]== ' ')
                {
                    returnString = returnString.Append("%20");

                }
                else
                {
                    returnString = returnString.Append(givenString[i].ToString());

                }
            }
            return returnString.ToString();

        }

        public void GenerateRotations(string givenString)
        {
            for(int indexRotate = 0; indexRotate > givenString.Length; indexRotate++)
            {
                string temp="";
                for(int i= indexRotate; i < givenString.Length; i++)
                {
                    temp = temp+ givenString[i].ToString();
                }
                for(int j = indexRotate + 1; j >=0; j--)
                {
                    temp=temp + givenString[j].ToString();
                }
                //ruaje temp ne array
            }
        }

        public static bool CheckIfStringsAreRotationsOfEachOther(string firstString, string secondString)
        {
            string temp = firstString;
            for (int i=0;i< firstString.Length;i++)
            {

                temp=temp.Remove(0,1) + firstString[i];
                if (secondString == temp )
                {
                    return true;
                }
            }
            return false;
        }


        public string LongestCommonPrefix(string[] strs)
        {
            StringBuilder common =new StringBuilder().Append( strs[0]);
            for (int i = 1; i < strs.Length; i++)
            {
                string temp = strs[i];
                int length = common.Length > temp.Length ?  temp.Length :  common.Length;
                for (int j= 0; j < length;j++ )
                {
                    if (!common[j].Equals(temp[j]))
                    {
                        common= common.Remove (j,1);
                    }
                }
            }
            return common.ToString();
        }
    }
}
