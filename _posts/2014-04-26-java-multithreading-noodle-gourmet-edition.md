---
layout: post
title: Java multithreading - Noodle Gourmet edition
---

It's the night before my Software Methodology exam, Vicki and I are hungry and decided to order food from Noodle Gourmet, and I think I am having too much fun learning how thread synchronization works in Java.

(For those of you who don't know me: Vicki is my flatmate and partner in crime, and I detest all seafood. ^_^)

```
public class Conversation {
	
	public static void main(String[] args) {
		Round r = new Round();
		new Jenny(r);
		new Vicki(r);
	}

}

class Round {
	
	boolean available = false;
	
	public synchronized void ask(String msg) {
		if (available) {
			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println(Thread.currentThread().getName() + ": " + msg);
		available = true;
		notify();
	}
	
	public synchronized void answer(String msg) {
		if (!available) {
			try {
				wait();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println(Thread.currentThread().getName() + ": " + msg);
		available = false;
		notify();
	}
}

class Jenny implements Runnable {
	
	Round r;
	String[] talk = { "What are you eating?" , "Ewww.", "I politely decline your offer. :P" };
	
	public Jenny(Round r) {
		this.r = r;
		new Thread(this, "Jenny").start();
	}

	@Override
	public void run() {
		for (String s : talk) {
			r.ask(s);
		}
	}
	
}

class Vicki implements Runnable {
	
	Round r;
	String[] talk = { "Fish cake" , "Would you like some? :P", "LOLOL." };
	
	public Vicki(Round r) {
		this.r = r;
		new Thread(this, "Vicki").start();
	}

	@Override
	public void run() {
		for (String s : talk) {
			r.answer(s);
		}
	}
	
}
```

When you run the code above, the output is:

```
Jenny: What are you eating?
Vicki: Fish cake
Jenny: Ewww.
Vicki: Would you like some? :P
Jenny: I politely decline your offer. :P
Vicki: LOLOL.
```
Back to studying. D:
