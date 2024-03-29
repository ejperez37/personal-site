---
title: mastering vim the language
date: 02-06-24
description: notes on my new fun toy
---

<a href="https://www.youtube.com/watch?v=wlR5gYd6um0&list=PLgsG1EXQ-Ro2t_oelP4cE9yeocwV-wm2K&index=21&t=1s&ab_channel=thoughtbot">LINK TO YT VIDEO</a>

This is different from my other blog posts - these are unedited notes. I brought these directly over from my Obsidian vault, since they stay in the ever-snazzy md format. A foreshadowing of what I hope to accomplish with my move from Notion to Obsidian!

UPDATE: This is somewhat gross to look at, but I need to build actual projects instead of futzing around with formatting my not-so-important blog posts. Sumimasen gozaimasu.

- “Typing is not the bottleneck”….”thought is”
  - It’s not the speed that makes learning Vim worth it - it’s the integration you experience with your code
  - “I think of a change I want to make, put my hands on the keyboard, and it happens within a snap”
- We have a lot of thoughts to get through as programmers, a finite amount of time to get through them - you don’t want to spend that precious thinking time on dealing with your editor
- Vim’s killer feature is the language it provides for making changes
  - As programmers, we spend wayyyy more time editing existing code as opposed to writing brand new code from scratch
- Syntax of the Language:
  - Verb + Noun
    - d for delete
    - w for word
    - dw = “delete a word”
  - AKA we have operations & the text/target that we want to change
- Commands are repeatable & undoable - after using dw, you can do anywhere else in the document and just hit “.” and it will repeat the same previous command
  - You can ALSO undo them - in the exact way that you did it, you can just undo it!
  - To clarify further - it's not undoing it a character at a time, it's going back an entire _operation_ at a time
- Verbs in Vim(the operations):
  - d = delete
  - c = change(delete & enter insert mode)
  - > = Indent
  - v = visually select
  - y = yank
- Going back to the repeatable point - instead of using “dw” to delete the example word, we can use “cw” to delete the word AND enter insert mode in order to write a new word, THEN when using the “.” to repeat it, the same new word gets repeated; the entire command we had executed is repeated
- Nouns in Vim(Motions)
  - w = word(forward by a word)
  - b = back(back by a word)
  - 2j = down 2 lines
- Every motion, everything used to move around in a document in Vim, can be used to make changes over that same distance
- Nouns in Vim(Text objects)
  - Allow you to operate from anywhere within a defined body of text
  - iw = inner word (works from anywhere within a word ON that whole word)
  - it = inner tag (the contents of an HTML tag)
  - i” = inner quotes
  - ip = inner paragraph
  - as = a sentence
- diw would delete the word the cursor is in the middle of, di” would delete the entire string within the quotes the cursor is in the middle of, di(starting square bracket here) would delete the entirety within the brackets, di( would delete the entirety of whats within the parentheses, dip would delete the entirety of what within the paragraph
- Again, same thing would happen if you use ciw - changing a word the cursor is on to “hello”; then even further, since Vim knows the concept of a word, if you hit “.” while inside another word, the same command gets executed, and it changes to “hello” as well!
- On the example of using cit to change content within HTML tags, cursor can be ANYWHERE within the open & closing tag _brackets_ and work
  - So the cursor can be on the contents of the tag itself, but it also works if the cursor is _within_ the opening or closing tag themselves
- "Vim provides an expressive language for defining and repeating changes that is well suited to how I think about these changes"
- Nouns in Vim(parameterized text objects)
  - f, F = "find" the next character
  - t, T = "find" the next character(up to, but not including the target character)
  - / = search(up to the next match)
    - parameterized is a word the speaker chose; just refers to the fact that these must be provided with a target parameter
    - ex: fa finds the next instance of a
  - ex of using t: ctL will find from where the cursor is, up TO the next instance of capital L, then execute the change command(which deletes and puts you in insert mode)
  - search operator seems powerful! literally lets you find whatever you typed in, but still in that vim language that allows you to "speak" a command sentence at the same time
- The COMPOSABILITY of vim(the language we have been examining) is where emacs & it's ancestors(exs: sublime & atom) fall short
  - emacs & co focused on extensibility; I imagine VSCode falls into this boat as well
  - "memorizing" ~30 different compositional things(operators, text objects, motions) leads to ~2000 different capabilities!
- In fact, the quote shared from the article "Stop the Vim Configuration Madness" summarizes the sentiment:
  - "You know what improves productivity? Mastering motions & operators"
  - AKA MASTER THE FUNDAMENTALS AND IGNORE THE "COMBO OF THE WEEK" - THEN YOU CAN DO ANYTHING
- Classic <a href="https://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118">StackOverflow post</a> that sets the standard on talking about the Vim language
- Tips for mastering the language:
  - The "dot" command(the repeat command)
    - Use the more general text object over motions aka iw instead of w; it's more REPEATABLE, more EXPRESSIVE of what you're trying to do
    - SO - prefer text objects to motions when possible!!!
  - Use relative number
    - Allows for line-based editing in an intuitive way
    - Turning on relative number shows you from where you are and then down X amount of lines
      - ...this is opposed to the absolute number of lines you normally see to the left of your editor
      - The current line is given it's absolute line number, then all the numbers above and below it are given relative numbers
    - Reinforces that vim allows you to think about the changes you wanna make, instead of in this case having to do math with the absolute line numbers
  - Speaker claims "visual mode is a smell"
    - Don't use two sentences where one would work fine; it breaks our first tip of thinking about the "dot" command to guide our usage of the vim language
    - viw highlights the word you're on, hitting c will allow you to change it, hitting . after you move to another position only repeats the c operation you just performed
      - compared to just using ciw in the first place, and then being able to use the . operation more efficiently!
    - "There are exceptions of course, but when using visual mode, you can usually stop and think of a better way to accomplish it"
- There are also plug-ins; custom operators/verbs!
  - Surrounding is one; ds" would be delete surrounding quotes
    - cs"' would change the surrounding double quotes to single quotes
    - Again - can then go and repeat this if you stick to the dot operation guideline!
  - Commentary is used for commenting out contents
    - cmip would comment out an entire paragraph
    - typing the cmip again would un-comment what you just commented!
  - ReplaceWithRegister uses gr
    - gr(go replace) would replace the inner word with whatever is in your register
    - yiw to yank a word, have it in register, then use griw to replace the inner word with whatever was in the register
    - just for clarity, you'd normally have to use viw and then p for paste, but that breaks the dot command guideline
- Can also make custom text objects!
  - Indent text object allows you to target the entire indented paragraph you're on, no matter what line of it your cursor is on
    - cmii would comment the entire indented body
  - Entire text object would target the whole document
- There's many more of all things than this talk goes over; more operators, more custom plug-ins for more custom operators and custom text objects
  - BUT even with just the FUNDAMENTALS, you can accomplish a lot!
