export default function StringReplace(link){


        var linkName = link.replace(/\s+/g, '-').replace('ø','oe').replace('å','aa').replace('æ','ae').toLowerCase();
        return 	linkName;

}
