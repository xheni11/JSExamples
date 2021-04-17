using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using InterviewExcercises.Algorithms;
namespace AlgorithmsUnitTest
{
    [TestClass]
    public class MatrixAlgorithmsTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            MatrixAlgorithms algorithms = new MatrixAlgorithms();
            int n = 9;
            int n2;
            algorithms.UsingRef(ref n);
            Console.WriteLine(n);
            algorithms.UsingOut(out n2);
            Console.WriteLine(n2);
            algorithms.UsingOut(out n);
            Console.WriteLine(n);
        }
    }
}
