using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExcercises.Algorithms
{

    public class LinkedListAlgorithms
    {
        public  Node Head;
        public int Size;

        public LinkedListAlgorithms()
        {
            Head = null;
        }

        public  Node AppendToTail(int data)
        {

            Node node = new Node(data);
            if (Head == null)
            {
                Head = node;
                return Head;
            }
            Node last = Head;   
            while (last.Next != null)
            {
                last = last.Next;
            }
            last.Next = node;
            Size++;
            return node;
        }
        public void Print()
        {
            Node tempNode = Head;
            while (tempNode != null)
            {
                Console.Write(tempNode.Data+"=>");
                tempNode = tempNode.Next;
            }
            Console.WriteLine("null");
        }

        public void Remove(int data)
        {
            Node node = Head;
            Node previous = null;
            if (Head.Data == data)
            {
                Head = Head.Next;
                return;
            }
            while (node != null&& node.Data != data)
            {
                previous = node;
                node = node.Next;
            }
            if (node != null)
            {
                previous.Next = node.Next;
                return;
            }
            Size--;
        }

        public void RemoveDublicates()
        {
            Node node = Head;
            while (node.Next!=null)
            {
                Node temp = node.Next;
                while (temp.Next != null)
                {
                    if (node.Data==temp.Data)
                    {
                        Remove(node.Data);
                    }
                    temp = temp.Next;
                }
                if (temp.Next == null) {
                    if (node.Data==temp.Data)
                    {
                        Remove(node.Data);
                    }
                }
                node = node.Next;

            }
        }
        public int FindNthLastElement(int n)
        {
            Node node = Head;
            int index = 0;
            while(index <= Size-n)
            {
                node = node.Next;
                index++;
            }
            return node.Data;
        }
       
        public LinkedListAlgorithms SumOfNumbers(LinkedListAlgorithms nr1, LinkedListAlgorithms nr2)
        {

            int sum = FromNodeToInt(nr1.Head) + FromNodeToInt(nr2.Head);
            return FromIntToNode(sum); 
        }

        public int FromNodeToInt(Node node)
        {
            int number = 0;
            int index = 0;
            while (node != null)
            {
                number = number + (node.Data * (int)Math.Pow(10, index));
                node = node.Next;
                index++;
            }
            return number;
        }

        public LinkedListAlgorithms FromIntToNode(int sum)
        {
            LinkedListAlgorithms sumNode = new LinkedListAlgorithms();
            while (sum > 0)
            {
                sumNode.AppendToTail(sum % 10);
                sum = sum / 10;
            }
            return sumNode;

        }

        public Node GetFirstCirculationNode()
        {
            Node node = Head.Next;
            Node temp = Head.Next;
            Node previous = Head;
            int insideCounter = 0;
            int outsideCounter = 0;
            bool flag = false;
            while (!flag)
            {
                while (insideCounter < Size- outsideCounter)
                {
                    if (previous.Next == temp.Next)
                    {
                        flag = true;
                    }
                    temp = temp.Next;
                    insideCounter++;
                }
                previous = node;
                node = node.Next;
                temp = node.Next;
                insideCounter = 0;
                outsideCounter++;
            }
            return previous;
        }
        public class Node
        {
            public Node Next { get; set; }
            public int Data { get; set; }

            public Node(int d, Node next)
            {
                this.Next = next;
                this.Data = d;
            }
            public Node(int d)
            {
                this.Next = null;
                this.Data = d;
            }


        }

    }
}
