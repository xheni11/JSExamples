using Microsoft.VisualStudio.TestTools.UnitTesting;
using InterviewExcercises;
using System;
using InterviewExcercises.Algorithms;

namespace AlgorithmsUnitTest
{
    [TestClass]
    public class StringAlgorithmsTest
    {
        [TestMethod]
        public void UniqueCharsTest()
        {
            bool result = StringsAlgorithms.HasAllUniqueChar("Abcdef!");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void NonUniqueCharsTest()
        {
            bool result = StringsAlgorithms.HasAllUniqueChar("Abbcdbef!");
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void GetStringWithReplacedSpace1()
        {
            string result = StringsAlgorithms.GetStringWithReplacedSpace("Abbcd bef !");
            Assert.AreEqual(result, "Abbcd%20bef%20!");
        }
        [TestMethod]
        public void GetStringWithReplacedSpace2()
        {
            string result = StringsAlgorithms.GetStringWithReplacedSpace("Abbcdbef!");
            Assert.AreEqual(result, "Abbcdbef!");
        }

        [TestMethod]
        public void CheckIfStringsAreRotationsOfEachOther1()
        {
            bool result = StringsAlgorithms.CheckIfStringsAreRotationsOfEachOther("redskirt","edskirtr");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CheckIfStringsAreRotationsOfEachOther2()
        {
            bool result = StringsAlgorithms.CheckIfStringsAreRotationsOfEachOther("redskirt", "dskirtre");
            Assert.IsTrue(result);
        }
        [TestMethod]
        public void CheckIfStringsAreRotationsOfEachOther3()
        {
            bool result = StringsAlgorithms.CheckIfStringsAreRotationsOfEachOther("redskirt", "skirtred");
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void CheckIfStringsAreNotRotationsOfEachOther()
        {
            bool result = StringsAlgorithms.CheckIfStringsAreRotationsOfEachOther("redskirt", "derskirt");
            Assert.IsFalse(result);
        }


    }
}
