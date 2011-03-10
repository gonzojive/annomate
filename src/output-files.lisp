(in-package :face-annotate)

(defun output-js ()
  (with-open-file (stream
                   (asdf:system-relative-pathname :face-annotate "www/svg-annotate.js")
                   :direction :output :if-exists :supersede)
    (paren-files:compile-script-system :face-annotate :output-stream stream))
  nil)
