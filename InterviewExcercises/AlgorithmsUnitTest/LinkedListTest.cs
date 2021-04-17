using InterviewExcercises.Algorithms;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using static InterviewExcercises.Algorithms.LinkedListAlgorithms;

namespace AlgorithmsUnitTest
{
    [TestClass]
    public class LinkedListTest
    {
        [TestMethod]
        public void CreateLinkedList()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(6);
            node.AppendToTail(6);
            node.Print();

        }
        [TestMethod]
        public void RemoveFromLinkedList1()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(6);
            node.AppendToTail(7);
            node.Remove(6);
            node.Print();

        }
        [TestMethod]
        public void RemoveFromLinkedList2()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(6);
            node.Remove(6);
            node.Print();

        }
        [TestMethod]
        public void RemoveFromLinkedList3()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(6);
            node.Remove(7);
            node.Print();

        }


        [TestMethod]
        public void RemoveDublicates1()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(7);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(3);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }

        [TestMethod]
        public void RemoveDublicates2()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(2);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(3);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }

        [TestMethod]
        public void RemoveDublicates3()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(3);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }
        [TestMethod]
        public void RemoveDublicates4()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(7);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }
        [TestMethod]
        public void RemoveDublicates5()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(6);
            node.AppendToTail(1);
            node.AppendToTail(6);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }
        [TestMethod]
        public void RemoveDublicates6()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(2);
            node.AppendToTail(2);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }
        [TestMethod]
        public void RemoveDublicates7()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(7);
            node.AppendToTail(2);
            node.AppendToTail(2);
            node.AppendToTail(1);
            node.Print();
            node.RemoveDublicates();
            node.Print();

        }

        [TestMethod]
        public void FindNthLastElement1()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(7);
            node.AppendToTail(2);
            node.AppendToTail(2);
            node.AppendToTail(1);
            node.Print();
           Console.WriteLine("3 Latest element is:  "+node.FindNthLastElement(3));

        }
        [TestMethod]
        public void FindNthLastElement2()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(5);
            node.AppendToTail(2);
            node.AppendToTail(7);
            node.AppendToTail(7);
            node.AppendToTail(2);
            node.AppendToTail(1);
            node.Print();
            Console.WriteLine("3 Latest element is:  " + node.FindNthLastElement(3));

        }

        [TestMethod]
        public void SumOfNumbers()
        {
            LinkedListAlgorithms node1 = new LinkedListAlgorithms();
            node1.AppendToTail(5);
            node1.AppendToTail(2);
            node1.AppendToTail(7);
            node1.Print();
            LinkedListAlgorithms node2 = new LinkedListAlgorithms();

            node2.AppendToTail(7);
            node2.AppendToTail(2);
            node2.AppendToTail(1);
            node2.Print();

            node1.SumOfNumbers(node1, node2).Print();

        }


        [TestMethod]
        public void FromIntToNode()
        {
            LinkedListAlgorithms node1 = new LinkedListAlgorithms();
            node1.AppendToTail(5);
            node1.AppendToTail(2);
            node1.AppendToTail(7);
            node1.Print();


            node1.FromIntToNode(34).Print();

        }

        [TestMethod]
        public void FromNodeToInt()
        {
            LinkedListAlgorithms node1 = new LinkedListAlgorithms();
            node1.AppendToTail(5);
            node1.AppendToTail(2);
            node1.AppendToTail(7);
            node1.Print();
            Console.WriteLine(node1.FromNodeToInt(node1.Head));

        }

        [TestMethod]
        public void CreateLoopedLinkedList()
        {
            LinkedListAlgorithms node = new LinkedListAlgorithms();
            node.AppendToTail(1);
            node.AppendToTail(2);
            Node beginning= node.AppendToTail(3);
            node.AppendToTail(4);
            node.AppendToTail(5);
            Node end= node.AppendToTail(6);
            end.Next = beginning;
            Console.WriteLine (node.GetFirstCirculationNode().Data);

        }

    }
}
