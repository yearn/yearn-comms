for f in ./public/_posts/**/**/**.jpg ./public/_posts/**/**/**/**.jpg; 
do 
	value=$(convert $f -format "%w" info:) ;
	if (($value > 900)); then
		convert ${f} -resize 900 ${f}
		echo ${f}
	fi;
done;
