for f in ./public/_posts/**/**/**.jpg ./public/_posts/**/**/**/**.jpg; 
do 
	convert -quality 80 $f $f
	echo "Reducing quality for $f";
done;