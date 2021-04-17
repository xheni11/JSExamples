using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExcercises.Algorithms
{
    public class MatrixAlgorithms
    {
        public const int ConstVar=1;
        public readonly int ReadOnlyVar=7;

        public MatrixAlgorithms()
        {
            ReadOnlyVar = 6;
        }
        public int UsingRef(ref int number)
        {
            number = 10;
            return number;
        }
        public int UsingOut(out int number)
        {
            number = 11;
            return number;
        }
        public bool IsNumberPalindrome(int givenNumber)
        {
            return givenNumber == ReverseNumber(givenNumber) ? true : false;
        }
        public int ReverseNumber(int givenNumber)
        {
            int returnNumber = 0;
            while (givenNumber>0)
            {
                returnNumber += givenNumber % 10;
                givenNumber /= 10;
            }
            return returnNumber;
        }

    }

}
