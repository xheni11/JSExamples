using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExcercises.Algorithms
{
    public class SearchArray
    {
        int[] array = {1,1,2,2,5,6,7,7,10,13,14,29};
        int sum = 17;
        public static int[] FindPairWithSum(int[] arr, int sum)
        {
            int[] pair = new int[2];
            int start = 0;
            int end = arr.Length - 1;        
            while (start<end)
            {

                    int tempSum = arr[end] + arr[start];
                    if (tempSum == sum)
                    {
                        pair[0] = start;
                        pair[1] = end;
                        return pair;
                    }else if (tempSum > sum)
                    {
                        end--;
                        //start = 0;
                    }
                    else
                    {
                        start++;
                    }
                
            }

            return pair;
        }
    }
}
