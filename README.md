# Artha Primitives

A collection of primitives used in the Artha language. Initially, I had added it to the Artha repo but I decided to establish it as a standalone repository so that I can create a documentation page for it and then import it into the systems that use it.

# Contents

This folder contains a manifest that includes all the types of primitives provided below.

## Computable Semantic Primitives
The computable primitives are the computational building blocks of the meaning of the world. They unambiguously specify a transformation, its invariants and the realization of the transformation. Since the computable primitives unambiguously identify their invariants, the correctness of any narrative that uses them can be established. Moreover, since the realization of these primitives is provided, during synthesis, it can be referenced directly.

## Meta Primitives
Meta primitives establish meaning that the engine uses to reason about the world. For example, for a participant block, this can establish the structural type, the role. Other examples include the types of items a list can contain or the kinds of operations that a participant is allowed to participate in. The amount of meaning used to describe the world is only limited by what the developer needs and since the engine knows the meaning, it can reason about it.

## Functional Primitives
The functional primitives connect the computable and legacy primitives together and create a narrative. For example, this can include the conditionally selecting meaning. Composite functional primitives like while and for are simply conditional blocks at a higher level of abstraction, making it easier to establish meaning more concisely. 

## Legacy Primitives
The legacy primitives are primitives that are opaque except at the level at which their meaning is declared. This means that they can be broken down into atomic meaningful primitives but its meaning is not known. This includes meaning like get input from terminal or write to terminal. One day, the meaning of these primitives will be established using an Artha script but until that happens, it will remain opaque except at the level at which it is defined. The legacy primitives also provide the realization that will be used by the synthesizer.