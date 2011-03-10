This is an HTML5/Javascript/SVG tool for collectively annotating
images.  It will include means of adding point-based annotations
(landmarks), as well as pixel-baased annotations (segmentations),
along with associated labels.

Included is some static HTML/Javascript stuff along with a Common Lisp
restful web server that pretty much just dumps annotations sent from
the client to disk.

# Landmark annotations

The system was first designed to handle landmark annotations of facial
images.  A prototype annotation is provided in SVG format with
embedded meta information.  The prototype image serves multiple
purposes: it is both the specification of the annotation scheme, and
it provides a visual guide for the annotator.

In a layer called "annotations" in an SVG image, several paths are
specified, usually corresponding to different regions of the face.
Each path has a title attribute that is displayed to the user, and
there is also a description string for that path which is parsed into
the names of the individual points along the path trajectory.
Consider this SVG:

    <path style="fill:none;stroke:#ff0000;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"
          d="m 37.142857,318.07647 c 0,0 0,237.14286 42.857143,308.57143 42.85714,71.42857 117.14286,191.42857 294.28571,191.42857 177.14286,0 245.71429,-177.14286 260,-222.85714 14.28572,-45.71429 22.85715,-274.28572 14.28572,-291.42858"
          id="face-edges">
          <title id="title4981">Edges of the face</title>
          <desc id="desc4979">landmarks: top-right-ear, mid-right, chin, mid-left, top-left-ear</desc>
    </path>

In the path above, the relevant meta information is the `id`
attribute, the `title` element, and the `desc` element.  The
`landmarks: top-right-ear ...` section corresponds to the x,y point
pairs specified in the `d` (data) attribute of the path element.  (The
`d` element is a data string that encodes the locations of each point
in the path.)

The user is responsible for annotating a novel image with the same set
of paths encoded in the prototype image.  After annotating an image, a
data structure is created with roughly the following form:

     [
        {
           "path-id" : "face-edges",
           "annotations" : {
                              "top-right-ear" : { "x" : 12.1, "y" : 123.54},
                              ...
                           }
        },
        ...
     ]

# Segmentation annotations... forthcoming


