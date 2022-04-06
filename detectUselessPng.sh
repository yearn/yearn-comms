for f in ./public/_posts/**/**/**.png ./public/_posts/**/**/**/**.png; 
do 
	value=$(convert $f -channel a -format "%[mean]" info:) ;
	if [ $value == 0 ]; then
		# magick $f ${f/%.png/.jpg} 
		echo ${f/%.png/.jpg};
	fi;
done;