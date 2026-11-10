import type { TranslationKey } from '@/lib/i18n';
import type { Localized } from '@/types/ssn';

/** Long-form content of the members' guide. Each page is a list of blocks the guide page renders. */

export type GuideBlock =
    | { type: 'heading'; eyebrow?: Localized; title: Localized }
    | { type: 'text'; text: Localized }
    | { type: 'bullets'; items: Localized[] }
    | { type: 'steps'; items: { title: Localized; text?: Localized; points?: Localized[] }[] }
    | { type: 'quote'; text: Localized; author: Localized }
    | { type: 'callout'; title: Localized; text: Localized; image: string }
    | { type: 'links'; items: { label: Localized; href: string }[] }
    | { type: 'network' };

export interface GuidePage {
    eyebrow: Localized;
    title: Localized;
    lead?: Localized;
    image: string;
    blocks: GuideBlock[];
}

export type GuidePageKey = 'about' | 'history' | 'vision' | 'governance' | 'development' | 'join' | 'resources';

/** Reading order and the label each page carries in the "continue reading" links. */
export const guideNav: { key: GuidePageKey; href: string; label: TranslationKey }[] = [
    { key: 'about', href: '/about', label: 'nav.about.intro' },
    { key: 'history', href: '/about/history', label: 'nav.about.history' },
    { key: 'vision', href: '/about/vision', label: 'nav.about.vision' },
    { key: 'governance', href: '/about/governance', label: 'nav.about.governance' },
    { key: 'development', href: '/professional-development', label: 'nav.development' },
    { key: 'join', href: '/join', label: 'nav.join' },
    { key: 'resources', href: '/resources', label: 'nav.resources' },
];

const lz = (en: string, ar: string): Localized => ({ en, ar });

const eyebrow = lz('Saida Schools Network · Guide for members', 'شبكة مدارس صيدا · دليل الأعضاء');

export const guidePages: Record<GuidePageKey, GuidePage> = {
    about: {
        eyebrow,
        title: lz('Guide for members', 'دليل الأعضاء'),
        lead: lz(
            'A collaborative platform for educators and schools committed to excellence and equity in education.',
            'منصة تعاونية للمربّين والمدارس الملتزمة بالتميّز والعدالة في التعليم.',
        ),
        image: '/images/photos/6.jpg',
        blocks: [
            {
                type: 'quote',
                text: lz(
                    'The concept of networks, applied to schools, suggests that schools collaborating in a cooperative effort will be more effective in enhancing organisational capacity and improving student learning compared to individual schools operating independently.',
                    'يشير مفهوم الشبكات، حين يُطبَّق على المدارس، إلى أنّ المدارس التي تتعاون في جهد مشترك تكون أكثر فاعلية في تعزيز القدرة المؤسسية وتحسين تعلّم الطلاب مقارنةً بالمدارس التي تعمل منفردة.',
                ),
                author: lz('Wohlstetter & Smith, 2000', 'فولستيتر وسميث، 2000'),
            },
            { type: 'network' },
            { type: 'heading', title: lz('Welcome to the Saida Schools Network Guide', 'أهلًا بكم في دليل شبكة مدارس صيدا') },
            { type: 'text', text: lz('Dear School Leaders,', 'السادة قادة المدارس الأعزاء،') },
            {
                type: 'text',
                text: lz(
                    'Welcome to the Saida Schools Network—a collaborative platform dedicated to fostering a dynamic ecosystem of learning, growth, and collaboration among educators and schools committed to excellence and equity in education.',
                    'أهلًا بكم في شبكة مدارس صيدا، منصة تعاونية تُعنى بتنمية منظومة نابضة بالتعلّم والنمو والتعاون بين المربّين والمدارس الملتزمة بالتميّز والعدالة في التعليم.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'At the heart of the Saida Schools Network is a shared vision—a vision that transcends boundaries and unites educators, whether from private, public, or vocational institutions, in a collective pursuit of educational advancement. It is a vision founded on the principles of equity and the democracy of learning, where every student’s potential is nurtured and realized, regardless of their background or circumstance.',
                    'في قلب شبكة مدارس صيدا رؤية مشتركة تتجاوز الحدود وتجمع المربّين، سواء من المؤسسات الخاصة أو الرسمية أو المهنية، في سعي جماعي نحو التقدّم التربوي. إنها رؤية قائمة على مبادئ العدالة وديمقراطية التعلّم، حيث تُرعى إمكانات كل طالب وتتحقق، أيًا كانت خلفيته أو ظروفه.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'As you explore this guide, you’ll discover a wealth of opportunities for professional development, interdisciplinary collaboration, and the exchange of expertise. Our network is designed to empower school leaders like you to not only excel within your institutions but also contribute to a broader educational landscape by engaging in meaningful collaborations, sharing insights, and participating in innovative practices.',
                    'وأنتم تتصفحون هذا الدليل ستكتشفون فرصًا وفيرة للتطوير المهني والتعاون بين الاختصاصات وتبادل الخبرات. صُمّمت شبكتنا لتمكّن قادة المدارس أمثالكم من التميّز داخل مؤسساتهم، ومن المساهمة أيضًا في المشهد التربوي الأوسع عبر شراكات هادفة وتبادل الأفكار والمشاركة في الممارسات المبتكرة.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'Through our network, we aim to create an environment where ideas flourish, best practices are shared, and transformative experiences are born. We believe that by working together, leveraging each other’s strengths, and embracing diverse perspectives, we can create a robust educational ecosystem that uplifts every learner and educator within it.',
                    'نسعى عبر شبكتنا إلى خلق بيئة تزدهر فيها الأفكار وتُشارَك فيها أفضل الممارسات وتولد فيها تجارب تحويلية. ونؤمن بأننا حين نعمل معًا، ونستفيد من نقاط قوة بعضنا، ونحتضن وجهات النظر المتنوعة، نستطيع بناء منظومة تربوية متينة ترتقي بكل متعلّم ومعلّم فيها.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'We invite you to join us on this journey of growth and collaboration—to become active members of the Saida Schools Network, to partake in the plethora of professional development opportunities, to engage in the exchange of expertise, and to contribute to a collaborative ecosystem that champions equity and the democratisation of learning.',
                    'ندعوكم إلى مرافقتنا في رحلة النمو والتعاون هذه: أن تكونوا أعضاء فاعلين في شبكة مدارس صيدا، وأن تشاركوا في فرص التطوير المهني العديدة، وأن تنخرطوا في تبادل الخبرات، وأن تسهموا في منظومة تعاونية تدافع عن العدالة وتعميم التعلّم.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'Together, let’s pave the way for a future where education knows no boundaries and every student thrives.',
                    'معًا نمهّد الطريق لمستقبل لا يعرف فيه التعليم حدودًا ويزدهر فيه كل طالب.',
                ),
            },
            { type: 'heading', title: lz('Introduction', 'مقدمة') },
            {
                type: 'text',
                text: lz(
                    'The Schools Network of Saida & Neighboring Towns is a local network in Saida and Jezzine offering optional membership for the public, semi-private, private, vocational and UNRWA-affiliated schools seeking to foster educational development and wellbeing for their learners and educators. Hariri Foundation established the school network in order to enhance partnership and coordination among schools and vocational institutes across the region.',
                    'شبكة مدارس صيدا والبلدات المجاورة شبكة محلية في صيدا وجزّين تتيح العضوية الاختيارية للمدارس الرسمية وشبه الخاصة والخاصة والمهنية والتابعة للأونروا الساعية إلى تعزيز التنمية التربوية ورفاه متعلّميها ومعلّميها. أسّست مؤسسة الحريري الشبكة لتعزيز الشراكة والتنسيق بين المدارس والمعاهد المهنية في المنطقة.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'The origins of Saida Schools Network go back to 2004 when the association transformed into a network that still exists today. Today, it represents a local network of 110 educational institutions representing an estimated 55,000 students and 5,000 teachers.',
                    'تعود جذور شبكة مدارس صيدا إلى عام 2004 حين تحوّلت الجمعية إلى شبكة لا تزال قائمة حتى اليوم. وهي تمثّل اليوم شبكة محلية من 110 مؤسسات تربوية تضم نحو 55,000 طالب و5,000 معلّم.',
                ),
            },
            { type: 'heading', title: lz('About this guide', 'عن هذا الدليل') },
            {
                type: 'text',
                text: lz(
                    'Everyone at your institution should refer to this guide, including the principal or director, the designated Saida Schools Network focal point, staff members, teachers, students, parents and the school board. It is for all those involved in creating the organization’s vision and culture, rules and regulations, day-to-day operations and governance, and the organizing, supervising, and assessing of events that take place inside and outside of classrooms.',
                    'ينبغي أن يرجع إلى هذا الدليل كل من في مؤسستكم، ومنهم المدير أو المديرة، ومنسّق الاتصال المعيّن لشبكة مدارس صيدا، والعاملون، والمعلمون، والطلاب، والأهل، ومجلس المدرسة. وهو موجّه إلى كل من يسهم في صياغة رؤية المؤسسة وثقافتها وأنظمتها وإدارتها اليومية وحوكمتها، وفي تنظيم الفعاليات داخل الصفوف وخارجها والإشراف عليها وتقييمها.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'It should also be a tool for informing the neighborhood, partners and local authorities, and the media about the goals and significance of being an SSN member.',
                    'ويجب أن يكون كذلك أداة لإطلاع المجتمع المحيط والشركاء والسلطات المحلية ووسائل الإعلام على أهداف العضوية في الشبكة وأهميتها.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'All SSN members will receive the guide, which will enable them to fully comprehend and fulfil their role as leaders and role models in teaching for life and sustainable development, as well as to provide their students with the tools and space to develop and act as global citizens.',
                    'سيحصل جميع أعضاء الشبكة على الدليل، ما يمكّنهم من فهم دورهم وأدائه كاملًا بوصفهم قادة وقدوات في التعليم من أجل الحياة والتنمية المستدامة، ومن تزويد طلابهم بالأدوات والمساحة اللازمة لينمووا ويتصرفوا كمواطنين عالميين.',
                ),
            },
        ],
    },

    history: {
        eyebrow,
        title: lz('History of the network', 'تاريخ الشبكة'),
        lead: lz('From an association in 2001 to a network that served as a catalyst across the country.', 'من جمعية عام 2001 إلى شبكة كانت حافزًا للتوسّع في أنحاء البلاد.'),
        image: '/images/photos/7.jpg',
        blocks: [
            {
                type: 'steps',
                items: [
                    {
                        title: lz('2001', '2001'),
                        text: lz(
                            'The Schools Network of Saida and its Surroundings was established as an association of private and public schools, initiated by the head of the parliamentary education committee, Mrs. Bahia Hariri, and with the support of the National Authority for Public Education.',
                            'تأسست شبكة مدارس صيدا ومحيطها كجمعية تضم مدارس خاصة ورسمية، بمبادرة من رئيسة لجنة التربية النيابية السيدة بهية الحريري وبدعم من الهيئة الوطنية للتعليم الرسمي.',
                        ),
                    },
                    {
                        title: lz('2004', '2004'),
                        text: lz(
                            'With the efforts of Deputy Hariri, the association transformed into a network that still exists today. Its success in Saida and the surrounding areas served as a catalyst for its expansion across the country.',
                            'بجهود النائبة الحريري تحوّلت الجمعية إلى شبكة لا تزال قائمة حتى اليوم. وكان نجاحها في صيدا والمناطق المحيطة حافزًا لتوسّعها في أنحاء البلاد.',
                        ),
                    },
                    {
                        title: lz('Today', 'اليوم'),
                        text: lz(
                            'The SSN and its Surroundings is considered a pioneering experience as it is the only one that brings together both private, public and vocational schools working together to improve the quality of education for over 55,000 students in Saida and its vicinity.',
                            'تُعدّ الشبكة تجربة رائدة، فهي الوحيدة التي تجمع المدارس الخاصة والرسمية والمهنية معًا لتحسين جودة التعليم لأكثر من 55,000 طالب في صيدا ومحيطها.',
                        ),
                    },
                ],
            },
            {
                type: 'callout',
                title: lz('One theme, many activities', 'موضوع واحد وأنشطة كثيرة'),
                text: lz(
                    'The network’s work revolves around a specific theme chosen through a vote during the general assembly meeting. This theme is then translated into activities such as murals, calendars, workshops for teachers, various activities for learners, and lectures aimed at school principals.',
                    'يدور عمل الشبكة حول موضوع محدد يُختار بالتصويت خلال اجتماع الجمعية العمومية. ثم يُترجم هذا الموضوع إلى أنشطة مثل الجداريات والتقاويم وورش المعلمين وأنشطة متنوعة للمتعلّمين ومحاضرات موجّهة إلى مديري المدارس.',
                ),
                image: '/images/photos/13.jpg',
            },
        ],
    },

    vision: {
        eyebrow,
        title: lz('Vision & Mission', 'الرؤية والرسالة'),
        lead: lz('Educational philosophy, vision, mission, goals and objectives.', 'الفلسفة التربوية والرؤية والرسالة والأهداف والغايات.'),
        image: '/images/photos/8.jpg',
        blocks: [
            { type: 'heading', title: lz('Educational philosophy', 'الفلسفة التربوية') },
            {
                type: 'text',
                text: lz(
                    'At SSN, we believe in the transformative power of education to shape the future and empower individuals to reach their full potential and develop the profile of international minded learners who are highly aware of their cultural identity and open to international dimensions and multiple perspectives to become the agents of change within their local and global communities.',
                    'نؤمن في الشبكة بالقوة التحويلية للتعليم في صياغة المستقبل وتمكين الأفراد من بلوغ كامل إمكاناتهم، وبناء ملمح متعلّمين ذوي عقلية دولية، يعون هويتهم الثقافية بعمق وينفتحون على الأبعاد الدولية ووجهات النظر المتعددة ليصبحوا عوامل تغيير في مجتمعاتهم المحلية والعالمية.',
                ),
            },
            {
                type: 'callout',
                title: lz('Vision', 'الرؤية'),
                text: lz(
                    'Our vision is to create a vibrant and interconnected community of regional schools, united by a common purpose to elevate educational excellence and equity.',
                    'رؤيتنا بناء مجتمع نابض ومترابط من مدارس المنطقة، يوحّدها هدف مشترك هو الارتقاء بالتميّز التربوي والعدالة.',
                ),
                image: '/images/photos/7.jpg',
            },
            {
                type: 'text',
                text: lz(
                    'We envision a network where schools transcend competition, and instead, embrace cooperation, sharing best practices, resources, and experiences to collectively uplift the educational landscape.',
                    'نتصوّر شبكة تتخطى فيها المدارس المنافسة وتتبنى التعاون، فتتشارك أفضل الممارسات والموارد والتجارب للارتقاء معًا بالمشهد التربوي.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'By nurturing a culture of continuous improvement, inclusivity, and collaboration, our network will become a beacon of inspiration, shaping the educational journey for generations to come.',
                    'وبترسيخ ثقافة التحسين المستمر والشمول والتعاون، ستغدو شبكتنا منارة إلهام تصوغ المسيرة التربوية للأجيال القادمة.',
                ),
            },
            {
                type: 'callout',
                title: lz('Mission', 'الرسالة'),
                text: lz(
                    'Connecting Minds, Nurturing Futures! Our mission is to establish a collaborative network of like-minded schools within the same region, fostering an environment of shared knowledge, innovation, and mutual support.',
                    'نربط العقول ونرعى المستقبل! رسالتنا إنشاء شبكة تعاونية من المدارس المتقاربة الفكر في المنطقة نفسها، تعزّز بيئة من المعرفة المشتركة والابتكار والدعم المتبادل.',
                ),
                image: '/images/photos/12.jpg',
            },
            {
                type: 'text',
                text: lz(
                    'Through this network, we aim to empower educators, students, and communities to collaborate, learn, and grow together, ultimately enhancing the quality of education and shaping the leaders of tomorrow.',
                    'ونهدف عبر هذه الشبكة إلى تمكين المربّين والطلاب والمجتمعات من التعاون والتعلّم والنمو معًا، بما يعزّز في النهاية جودة التعليم ويصنع قادة الغد.',
                ),
            },
            { type: 'heading', title: lz('Goals and objectives', 'الأهداف والغايات') },
            {
                type: 'text',
                text: lz(
                    'The network’s ultimate objective comprises the promotion of educational justice and democracy through enhancing dialogue and coordination among schools for exchange of expertise and joint capacity building. The network seeks to enable partnerships for development and civic engagement among member schools and their constituents (administration, teachers, students, parents, and the local community) through organizing annual forums, workshops and activities every year. SSN aims to:',
                    'الغاية القصوى للشبكة تعزيز العدالة التربوية والديمقراطية عبر توطيد الحوار والتنسيق بين المدارس لتبادل الخبرات وبناء القدرات المشتركة. وتسعى إلى تمكين الشراكات من أجل التنمية والمشاركة المدنية بين المدارس الأعضاء وأطرافها (الإدارة والمعلمين والطلاب والأهل والمجتمع المحلي) من خلال تنظيم منتديات وورش وأنشطة سنوية. وتهدف الشبكة إلى:',
                ),
            },
            {
                type: 'bullets',
                items: [
                    lz('Foster harmony, communication and collaboration within school communities, irrespective of their affiliation.', 'تعزيز الانسجام والتواصل والتعاون داخل المجتمعات المدرسية بصرف النظر عن انتمائها.'),
                    lz(
                        'Strengthen partnerships and coordination between schools, vocational institutes (private and public), and those affiliated with UNRWA in Saida and Jezzine, with a focus on establishing educational justice and democratic education.',
                        'تقوية الشراكات والتنسيق بين المدارس والمعاهد المهنية (الخاصة والرسمية) وتلك التابعة للأونروا في صيدا وجزّين، مع التركيز على ترسيخ العدالة التربوية والتعليم الديمقراطي.',
                    ),
                    lz('Enhance the overall educational quality of schools.', 'الارتقاء بالجودة التربوية العامة للمدارس.'),
                    lz('Identify and address common educational challenges.', 'تحديد التحديات التربوية المشتركة ومعالجتها.'),
                    lz('Disseminate successful experiences and facilitate the exchange of expertise.', 'نشر التجارب الناجحة وتيسير تبادل الخبرات.'),
                    lz(
                        'Coordinate with local, national, and international organizations through conferences, forums, workshops, training courses, and meetings to enhance education.',
                        'التنسيق مع المنظمات المحلية والوطنية والدولية عبر المؤتمرات والمنتديات والورش والدورات التدريبية واللقاءات للارتقاء بالتعليم.',
                    ),
                    lz(
                        'Build capacities of teaching staff, admin staff and students, emphasizing civic engagement, interpersonal skills, and digital literacy.',
                        'بناء قدرات الهيئة التعليمية والإدارية والطلاب، مع التركيز على المشاركة المدنية والمهارات الشخصية والثقافة الرقمية.',
                    ),
                    lz(
                        'Activate local partnerships involving school management, teachers, parents, students, and the local community in the educational process.',
                        'تفعيل الشراكات المحلية التي تشرك إدارة المدرسة والمعلمين والأهل والطلاب والمجتمع المحلي في العملية التربوية.',
                    ),
                    lz(
                        'Conduct educational studies and research within network schools to establish an information observatory and contribute to the Lebanese educational community in collaboration with institutes and universities.',
                        'إجراء دراسات وأبحاث تربوية داخل مدارس الشبكة لإنشاء مرصد معلومات والإسهام في المجتمع التربوي اللبناني بالتعاون مع المعاهد والجامعات.',
                    ),
                    lz('Work on the effectiveness of the network to positively impact educational decisions in Lebanon.', 'العمل على فاعلية الشبكة للتأثير إيجابًا في القرارات التربوية في لبنان.'),
                    lz(
                        'Pool resources among schools to produce joint artistic, scientific, cultural, and social projects, fostering the exchange of experiences and local and international resources.',
                        'تجميع الموارد بين المدارس لإنتاج مشاريع فنية وعلمية وثقافية واجتماعية مشتركة، بما يعزّز تبادل التجارب والموارد المحلية والدولية.',
                    ),
                    lz(
                        'Foster communication, dialogue, coordination, and collaboration with local and international institutions through conferences and meetings.',
                        'تعزيز التواصل والحوار والتنسيق والتعاون مع المؤسسات المحلية والدولية من خلال المؤتمرات واللقاءات.',
                    ),
                ],
            },
        ],
    },

    governance: {
        eyebrow,
        title: lz('Who we are: governance model', 'من نحن: نموذج الحوكمة'),
        lead: lz('Six features of effective governance, and who carries which role.', 'ست سمات للحوكمة الفعّالة، ومن يتولى أي دور.'),
        image: '/images/photos/18.jpg',
        blocks: [
            { type: 'heading', title: lz('Effective governance is based on six key features', 'ترتكز الحوكمة الفعّالة على ست سمات رئيسية') },
            {
                type: 'steps',
                items: [
                    { title: lz('Strategic leadership that sets and champions vision, ethos and strategy.', 'قيادة استراتيجية تضع الرؤية والروح والاستراتيجية وتدافع عنها.') },
                    { title: lz('Accountability that drives up educational standards and financial performance.', 'مساءلة ترفع المعايير التربوية والأداء المالي.') },
                    { title: lz('People with the right skills, experience, qualities and capacity.', 'أشخاص يمتلكون المهارات والخبرة والصفات والقدرة المناسبة.') },
                    { title: lz('Structures that reinforce clearly defined roles and responsibilities.', 'هياكل تعزّز الأدوار والمسؤوليات المحددة بوضوح.') },
                    { title: lz('Compliance with statutory and contractual requirements.', 'الامتثال للمتطلبات القانونية والتعاقدية.') },
                    { title: lz('Evaluation to monitor and improve the quality and impact of governance.', 'تقييم لمتابعة جودة الحوكمة وأثرها وتحسينهما.') },
                ],
            },
            {
                type: 'text',
                text: lz(
                    'The first two features are the core pillars of the board’s role and purpose. The second two are about the way in which governance is organised, and the last two are about ensuring and improving the quality of governance.',
                    'السمتان الأولى والثانية هما الركيزتان الأساسيتان لدور المجلس وغايته. والسمتان الثالثة والرابعة تتعلقان بطريقة تنظيم الحوكمة، والأخيرتان بضمان جودة الحوكمة وتحسينها.',
                ),
            },
            { type: 'heading', title: lz('Governance and leadership structure', 'هيكل الحوكمة والقيادة') },
            {
                type: 'text',
                text: lz('The board should be taken to mean the accountable body for the network.', 'يُقصد بالمجلس الجهة المسؤولة عن الشبكة.'),
            },
            {
                type: 'steps',
                items: [
                    {
                        title: lz('Advisory councils', 'المجالس الاستشارية'),
                        points: [
                            lz('7 members from schools’ principals: 3 from public schools, 3 from private schools and 1 from a vocational school.', 'سبعة أعضاء من مديري المدارس: ثلاثة من المدارس الرسمية وثلاثة من المدارس الخاصة وواحد من مدرسة مهنية.'),
                            lz(
                                'These principals are selected by Hariri Foundation to provide input and expertise on specific issues such as curriculum development, diversity and inclusion, students’ involvement in social responsibility and volunteering programs. They also respond to arising crises and societal concerns.',
                                'تختار مؤسسة الحريري هؤلاء المديرين ليقدّموا الرأي والخبرة في قضايا محددة كتطوير المناهج والتنوع والشمول وانخراط الطلاب في برامج المسؤولية الاجتماعية والتطوع. كما يستجيبون للأزمات والهموم المجتمعية الطارئة.',
                            ),
                            lz('Two members of Hariri Foundation, who collaborate with the schools’ principals.', 'عضوان من مؤسسة الحريري يتعاونان مع مديري المدارس.'),
                        ],
                    },
                ],
            },
            {
                type: 'text',
                text: lz(
                    'Executive leaders should be taken to mean those held to account by the board for the performance of the network. They include the positions of chair and co-chair.',
                    'يُقصد بالقادة التنفيذيين من يحاسبهم المجلس على أداء الشبكة، ويشملون منصبي الرئيس ونائب الرئيس.',
                ),
            },
            {
                type: 'steps',
                items: [
                    {
                        title: lz('Chair / Educational consultant', 'الرئيس / المستشار التربوي'),
                        points: [
                            lz('Conducts periodic strategic planning exercises to set network goals, objectives, and priorities, ensuring alignment with the mission and vision.', 'يجري تمارين تخطيط استراتيجي دورية لوضع أهداف الشبكة وغاياتها وأولوياتها بما يتوافق مع الرسالة والرؤية.'),
                            lz('Facilitates the development and implementation of strategic plans that guide the network’s long-term goals, objectives, and initiatives.', 'ييسّر إعداد الخطط الاستراتيجية وتنفيذها لتوجيه أهداف الشبكة ومبادراتها بعيدة المدى.'),
                            lz('Provides the strategic direction for improving school performance and educational attainments in line with national and international trends in education.', 'يوفّر التوجيه الاستراتيجي لتحسين أداء المدارس وتحصيلها التربوي بما يواكب الاتجاهات الوطنية والدولية في التعليم.'),
                            lz('Ensures compliance with all relevant laws, regulations, and standards applicable to the network’s operations.', 'يضمن الامتثال لجميع القوانين والأنظمة والمعايير ذات الصلة بعمل الشبكة.'),
                            lz('Implements a risk management framework to identify, assess, and mitigate potential risks that could impact the network’s mission and operations.', 'يطبّق إطارًا لإدارة المخاطر لتحديد المخاطر المحتملة التي قد تؤثر في رسالة الشبكة وعملياتها وتقييمها والحد منها.'),
                            lz('Oversees the strategic direction, policies, and overall functioning of the school network.', 'يشرف على التوجّه الاستراتيجي والسياسات والسير العام لشبكة المدارس.'),
                        ],
                    },
                    {
                        title: lz('Co-chair', 'نائب الرئيس'),
                        text: lz('Collaborates with the chair to:', 'يتعاون مع الرئيس من أجل:'),
                        points: [
                            lz('Utilize data and research to inform the development of strategic priorities, which may involve analyzing educational trends, student performance data, demographic information, and other relevant metrics.', 'استخدام البيانات والأبحاث لإرشاد وضع الأولويات الاستراتيجية، وقد يشمل ذلك تحليل الاتجاهات التربوية وبيانات أداء الطلاب والمعلومات الديموغرافية ومؤشرات أخرى ذات صلة.'),
                            lz('Communicate the strategic plan and its progress to all stakeholders, ensuring transparency and engagement throughout the implementation process.', 'إطلاع جميع الأطراف على الخطة الاستراتيجية وتقدّمها، بما يضمن الشفافية والمشاركة طوال التنفيذ.'),
                            lz('Ensure that meetings are conducted efficiently, that the agenda is followed, and that all relevant matters are discussed.', 'ضمان إدارة الاجتماعات بكفاءة والتزام جدول الأعمال ومناقشة جميع المسائل ذات الصلة.'),
                        ],
                    },
                    {
                        title: lz('Research and development coordinator', 'منسّق البحث والتطوير'),
                        text: lz(
                            'Plays a crucial role in fostering innovation, improving educational practices, and promoting continuous improvement across the network. Collaborates with the chair and co-chair to:',
                            'يؤدي دورًا حاسمًا في تعزيز الابتكار وتحسين الممارسات التربوية وتشجيع التحسين المستمر في أنحاء الشبكة. ويتعاون مع الرئيس ونائبه من أجل:',
                        ),
                        points: [
                            lz('Manage various aspects of the network.', 'إدارة جوانب متعددة من عمل الشبكة.'),
                            lz('Establish performance metrics and evaluation processes for both the network’s leadership and its programs or services.', 'وضع مؤشرات أداء وعمليات تقييم لقيادة الشبكة وبرامجها وخدماتها.'),
                            lz('Improve continuously and commit to a culture of continuous improvement, where the network regularly reviews its governance model and operations to adapt to changing circumstances and best practices.', 'التحسين المستمر والالتزام بثقافة التحسين المستمر، حيث تراجع الشبكة نموذج حوكمتها وعملياتها بانتظام لتتكيّف مع المتغيرات وأفضل الممارسات.'),
                            lz('Coordinate research initiatives and implement new educational strategies.', 'تنسيق المبادرات البحثية وتنفيذ استراتيجيات تربوية جديدة.'),
                        ],
                    },
                    {
                        title: lz('Operations quality controller', 'مراقب جودة العمليات'),
                        text: lz('Collaborates with the chair and co-chair to:', 'يتعاون مع الرئيس ونائبه من أجل:'),
                        points: [
                            lz('Establish clear channels of communication to disseminate information, decisions, and progress reports to stakeholders, ensuring transparency and accountability.', 'إنشاء قنوات تواصل واضحة لنشر المعلومات والقرارات وتقارير التقدّم إلى الأطراف المعنية، بما يضمن الشفافية والمساءلة.'),
                            lz('Facilitate collaboration among schools.', 'تيسير التعاون بين المدارس.'),
                            lz('Collect data.', 'جمع البيانات.'),
                            lz('Set the agenda of the meetings.', 'إعداد جدول أعمال الاجتماعات.'),
                            lz('Help and support with logistics preparation.', 'المساعدة والدعم في التحضيرات اللوجستية.'),
                            lz('Documentation: maintain comprehensive records of evaluations, action plans, and outcomes for future reference.', 'التوثيق: الاحتفاظ بسجلات شاملة للتقييمات وخطط العمل والنتائج للرجوع إليها مستقبلًا.'),
                            lz('Transparent communication: ensure transparent communication about evaluation results, strategies, and improvements to all stakeholders.', 'التواصل الشفاف: ضمان إطلاع جميع الأطراف بشفافية على نتائج التقييم والاستراتيجيات والتحسينات.'),
                        ],
                    },
                    {
                        title: lz('Quality education assessor', 'مقيّم جودة التعليم'),
                        text: lz('Reports to the chair and co-chair and collaborates with schools’ principals to:', 'يرفع تقاريره إلى الرئيس ونائبه ويتعاون مع مديري المدارس من أجل:'),
                        points: [
                            lz('Identify professional development needs.', 'تحديد احتياجات التطوير المهني.'),
                            lz('Assist in the design and implementation of training programs to enhance the skills and competencies of teachers and staff.', 'المساعدة في تصميم برامج التدريب وتنفيذها لتعزيز مهارات المعلمين والعاملين وكفاياتهم.'),
                            lz('Evaluate and ensure that the educational programs and services offered by the schools within the network meet established quality standards.', 'تقييم البرامج والخدمات التربوية التي تقدمها مدارس الشبكة والتأكد من استيفائها معايير الجودة المعتمدة.'),
                            lz('Maintain and improve the quality of education within a school network, ensuring that students receive a high-quality education that prepares them for future success.', 'الحفاظ على جودة التعليم داخل شبكة المدارس وتحسينها، بما يضمن حصول الطلاب على تعليم عالي الجودة يعدّهم لنجاح المستقبل.'),
                        ],
                    },
                    {
                        title: lz('Treasurer', 'أمين الصندوق'),
                        text: lz('Works closely with the governing board to:', 'يعمل بالتعاون الوثيق مع مجلس الإدارة من أجل:'),
                        points: [
                            lz('Manage the financial affairs of the network and ensure that its financial resources are used efficiently, transparently, and in accordance with applicable regulations and policies.', 'إدارة الشؤون المالية للشبكة وضمان استخدام مواردها المالية بكفاءة وشفافية ووفق الأنظمة والسياسات المعمول بها.'),
                            lz('Maintain the financial health and sustainability of the network, which ultimately supports the educational mission and goals of the organization.', 'الحفاظ على سلامة الشبكة المالية واستدامتها، بما يدعم في النهاية الرسالة التربوية للمؤسسة وأهدافها.'),
                        ],
                    },
                ],
            },
            { type: 'heading', title: lz('How the board works', 'كيف يعمل المجلس') },
            {
                type: 'text',
                text: lz(
                    'Although governors are volunteers, they have a vital and demanding role that requires skill and professionalism. The board of governors should operate at a strategic level, leaving the Executive Team responsible and accountable to it for the operational day-to-day running of the network.',
                    'مع أن أعضاء المجلس متطوعون، فإن دورهم حيوي وشاق ويتطلب مهارة واحترافية. وينبغي أن يعمل مجلس الحكّام على المستوى الاستراتيجي، تاركًا للفريق التنفيذي المسؤولية والمساءلة أمامه عن التسيير اليومي للشبكة.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'The board and Advisory Committee should avoid having their time consumed with issues of secondary importance, and focus strongly on three core functions:',
                    'ينبغي للمجلس واللجنة الاستشارية ألا يُستهلك وقتهما في قضايا ثانوية، وأن يركّزا بقوة على ثلاث وظائف أساسية:',
                ),
            },
            {
                type: 'bullets',
                items: [
                    lz('Setting the vision and strategic direction of the network.', 'وضع رؤية الشبكة وتوجّهها الاستراتيجي.'),
                    lz('Holding the Chair to account for its educational performance.', 'مساءلة الرئيس عن الأداء التربوي.'),
                    lz('Ensuring financial resources are well spent.', 'ضمان حسن إنفاق الموارد المالية.'),
                ],
            },
            {
                type: 'text',
                text: lz('The board and Advisory Committee need a robust process and framework for setting priorities, creating accountability and monitoring progress. Good practice includes:', 'يحتاج المجلس واللجنة الاستشارية إلى عملية وإطار متينين لتحديد الأولويات وخلق المساءلة ومتابعة التقدّم. ومن الممارسات الجيدة:'),
            },
            {
                type: 'bullets',
                items: [
                    lz('Reviewing its own performance regularly and publishing an annual statement explaining how it has fulfilled its responsibilities.', 'مراجعة أدائه بانتظام ونشر بيان سنوي يوضح كيف أدّى مسؤولياته.'),
                    lz('Developing and maintaining a scheme of delegation that defines explicitly at which level each of its functions will be exercised, while the board as a whole retains oversight of the core functions.', 'وضع نظام للتفويض والحفاظ عليه يحدد بوضوح المستوى الذي تُمارس عنده كل وظيفة، مع احتفاظ المجلس ككل بالإشراف على الوظائف الأساسية.'),
                    lz('The chair keeping the board and Advisory Committee focused on its core functions and ensuring it operates effectively, including through the active contribution of all its members.', 'أن يُبقي الرئيس المجلس واللجنة الاستشارية مركّزين على وظائفهما الأساسية ويضمن فاعلية عملهما بمساهمة نشطة من جميع الأعضاء.'),
                    lz('High quality professional clerking, which is crucial to the effective functioning of the board.', 'أمانة سر مهنية عالية الجودة، وهي أساسية لحسن سير عمل المجلس.'),
                ],
            },
            {
                type: 'text',
                text: lz('It is also good practice to publish an annual governance statement explaining how the board has fulfilled its responsibilities, particularly in relation to its core functions, including:', 'ومن الممارسات الجيدة أيضًا نشر بيان حوكمة سنوي يوضح كيف أدّى المجلس مسؤولياته، لا سيما ما يتعلق بوظائفه الأساسية، ويشمل:'),
            },
            {
                type: 'bullets',
                items: [
                    lz('The governance arrangements in place, including the remit of any committees.', 'ترتيبات الحوكمة المعتمدة، بما فيها صلاحيات أي لجان.'),
                    lz('The attendance record of individual governors at board and committee meetings.', 'سجل حضور كل عضو في اجتماعات المجلس واللجان.'),
                    lz('An assessment of the effectiveness and impact of the board and any committees, with details of any particular challenges that have arisen.', 'تقييمًا لفاعلية المجلس وأي لجان وأثرهما، مع تفاصيل أي تحديات خاصة برزت.'),
                ],
            },
            { type: 'heading', title: lz('Delegation and committees', 'التفويض واللجان') },
            {
                type: 'text',
                text: lz(
                    'The regulations allow the board and the Advisory Committee, should they wish, to delegate some of their functions to committees or individuals. However, the board and Advisory Committee always act as a ‘body corporate’ and remain accountable at the board level for their functions. This is why committees and individuals must report back to the full board on any activities they have carried out on its behalf.',
                    'تتيح الأنظمة للمجلس واللجنة الاستشارية، إن رغبا، تفويض بعض وظائفهما إلى لجان أو أفراد. غير أنهما يعملان دائمًا بصفة ‘هيئة اعتبارية’ ويظلان مسؤولين على مستوى المجلس عن وظائفهما. ولهذا يجب على اللجان والأفراد إطلاع المجلس بكامل هيئته على أي أنشطة نفّذوها نيابة عنه.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'Where the board and Advisory Committee delegate any of their functions, they should ensure that the committee comprises, or the individual has, the necessary skills to carry out those functions, particularly where financial information or performance data are being considered.',
                    'وحين يفوّض المجلس واللجنة الاستشارية أيًا من وظائفهما، عليهما التأكد من أن اللجنة تضم، أو أن الفرد يمتلك، المهارات اللازمة لأداء تلك الوظائف، ولا سيما عند النظر في المعلومات المالية أو بيانات الأداء.',
                ),
            },
        ],
    },

    development: {
        eyebrow,
        title: lz('Strategies for sustainable development and growth', 'استراتيجيات التنمية المستدامة والنمو'),
        lead: lz(
            'Ten strategies that keep the network sustainable, reinforce quality education and strengthen collaboration among member schools.',
            'عشر استراتيجيات تحافظ على استدامة الشبكة وتعزّز جودة التعليم وتقوّي التعاون بين المدارس الأعضاء.',
        ),
        image: '/images/photos/9.jpg',
        blocks: [
            {
                type: 'text',
                text: lz(
                    'To ensure the sustainability of the Saida Schools Network while reinforcing quality education and fostering collaboration among member schools, we need to adopt and implement the strategies below.',
                    'لضمان استدامة شبكة مدارس صيدا مع تعزيز جودة التعليم وتشجيع التعاون بين المدارس الأعضاء، نحتاج إلى اعتماد الاستراتيجيات التالية وتنفيذها.',
                ),
            },
            {
                type: 'steps',
                items: [
                    {
                        title: lz('Long-term vision and planning', 'رؤية وتخطيط بعيدا المدى'),
                        points: [
                            lz('Develop a clear, adaptable long-term vision for the network that aligns with evolving educational needs.', 'وضع رؤية بعيدة المدى واضحة وقابلة للتكيّف تتوافق مع الاحتياجات التربوية المتطورة.'),
                            lz('Create strategic plans outlining objectives, milestones, and measures for sustainability.', 'إعداد خطط استراتيجية تحدد الأهداف والمراحل ومقاييس الاستدامة.'),
                        ],
                    },
                    {
                        title: lz('Diverse revenue streams', 'مصادر تمويل متنوعة'),
                        points: [
                            lz('Establish multiple revenue sources (sponsorships, grants, memberships) to reduce dependency on singular funding.', 'إنشاء مصادر دخل متعددة (رعايات ومنح واشتراكات) للحد من الاعتماد على تمويل وحيد.'),
                            lz('Explore partnerships with educational institutions, organizations, or businesses for financial support.', 'استكشاف شراكات مع مؤسسات تربوية ومنظمات وشركات للحصول على دعم مالي.'),
                        ],
                    },
                    {
                        title: lz('Continuous evaluation and improvement', 'التقييم والتحسين المستمران'),
                        points: [
                            lz('Implement regular assessments of network activities and their impact on member schools.', 'إجراء تقييمات منتظمة لأنشطة الشبكة وأثرها في المدارس الأعضاء.'),
                            lz('Use feedback mechanisms to identify areas for improvement and make necessary adjustments.', 'استخدام آليات التغذية الراجعة لتحديد مجالات التحسين وإجراء التعديلات اللازمة.'),
                            lz('Implement the Urban Observatory that serves as a knowledge hub for urban development and sustainability, providing valuable data, analysis, and information to support evidence-based decision-making and policy formulation.', 'تفعيل المرصد الحضري الذي يعمل مركزًا معرفيًا للتنمية الحضرية والاستدامة، ويوفّر بيانات وتحليلات ومعلومات قيّمة لدعم اتخاذ القرار وصياغة السياسات المستندة إلى الأدلة.'),
                        ],
                    },
                    {
                        title: lz('Capacity building and training', 'بناء القدرات والتدريب'),
                        points: [
                            lz('Offer ongoing professional development opportunities for educators within member schools.', 'توفير فرص تطوير مهني مستمرة للمربّين في المدارس الأعضاء.'),
                            lz('Provide workshops and training sessions focused on leadership, pedagogy, and innovation.', 'تنظيم ورش وجلسات تدريبية تركّز على القيادة وطرائق التدريس والابتكار.'),
                        ],
                    },
                    {
                        title: lz('Collaborative initiatives', 'مبادرات تعاونية'),
                        points: [
                            lz('Facilitate collaborative projects among member schools to encourage sharing of best practices and resources.', 'تيسير مشاريع تعاونية بين المدارس الأعضاء لتشجيع تبادل أفضل الممارسات والموارد.'),
                            lz('Create forums or platforms for educators to exchange ideas, lesson plans, and teaching methodologies.', 'إنشاء منتديات أو منصات يتبادل فيها المربّون الأفكار وخطط الدروس ومنهجيات التدريس.'),
                        ],
                    },
                    {
                        title: lz('Technology integration', 'دمج التكنولوجيا'),
                        points: [
                            lz('Leverage technology for communication, resource-sharing, and virtual collaboration among schools.', 'توظيف التكنولوجيا في التواصل وتبادل الموارد والتعاون الافتراضي بين المدارس.'),
                            lz('Encourage the adoption of digital tools that enhance teaching and learning experiences.', 'تشجيع اعتماد الأدوات الرقمية التي تعزّز تجارب التعليم والتعلّم.'),
                        ],
                    },
                    {
                        title: lz('Community engagement and outreach', 'المشاركة المجتمعية والتواصل'),
                        points: [
                            lz('Foster community partnerships that benefit member schools and the wider community.', 'تعزيز الشراكات المجتمعية التي تعود بالنفع على المدارس الأعضاء والمجتمع الأوسع.'),
                            lz('Engage parents, local authorities, and stakeholders in network activities to garner support and involvement.', 'إشراك الأهل والسلطات المحلية وأصحاب المصلحة في أنشطة الشبكة لكسب الدعم والمشاركة.'),
                        ],
                    },
                    {
                        title: lz('Governance and leadership structure', 'هيكل الحوكمة والقيادة'),
                        points: [
                            lz('Establish transparent governance structures with defined roles and responsibilities for effective decision-making.', 'إنشاء هياكل حوكمة شفافة بأدوار ومسؤوليات محددة لاتخاذ قرارات فعّالة.'),
                            lz('Ensure diverse representation and participation from member schools in leadership positions.', 'ضمان تمثيل متنوع ومشاركة من المدارس الأعضاء في مواقع القيادة.'),
                        ],
                    },
                    {
                        title: lz('Advocacy for education policies', 'المناصرة من أجل السياسات التربوية'),
                        points: [
                            lz('Advocate for policies supporting quality education at local, regional, and national levels.', 'مناصرة السياسات الداعمة للتعليم الجيد على المستويات المحلية والإقليمية والوطنية.'),
                            lz('Collaborate with policymakers to influence decisions that benefit member schools and education as a whole.', 'التعاون مع صانعي السياسات للتأثير في القرارات التي تفيد المدارس الأعضاء والتعليم عمومًا.'),
                        ],
                    },
                    {
                        title: lz('A culture of innovation and adaptability', 'ثقافة الابتكار والتكيّف'),
                        points: [
                            lz('Encourage a culture of experimentation, innovation, and adaptability within member schools.', 'تشجيع ثقافة التجريب والابتكار والتكيّف داخل المدارس الأعضاء.'),
                            lz('Embrace change and adapt to evolving educational needs and trends.', 'تقبّل التغيير والتكيّف مع الاحتياجات والاتجاهات التربوية المتطورة.'),
                        ],
                    },
                ],
            },
            {
                type: 'text',
                text: lz(
                    'By implementing these strategies, the Saida Schools Network can cultivate sustainability, promote quality education, and strengthen collaborative ties among member schools, fostering an environment conducive to ongoing growth and development.',
                    'وبتنفيذ هذه الاستراتيجيات تستطيع شبكة مدارس صيدا ترسيخ الاستدامة وتعزيز جودة التعليم وتقوية الروابط التعاونية بين المدارس الأعضاء، بما يهيّئ بيئة مواتية للنمو والتطور المستمرين.',
                ),
            },
            { type: 'heading', title: lz('Making a difference: self-evaluation and feedback', 'إحداث فرق: التقييم الذاتي والتغذية الراجعة') },
            {
                type: 'text',
                text: lz(
                    'Conducting a SWOT (strengths, weaknesses, opportunities and threats) and a PESTLE (political, economic, sociological, technological, legal and environmental) analysis allows those leading and governing to assess:',
                    'يتيح إجراء تحليل SWOT (نقاط القوة والضعف والفرص والتهديدات) وتحليل PESTLE (السياسي والاقتصادي والاجتماعي والتكنولوجي والقانوني والبيئي) لمن يقودون ويحكمون أن يقيّموا:',
                ),
            },
            {
                type: 'bullets',
                items: [
                    lz('How the Saida Schools Network is performing for all its pupils: educational outcomes, safeguarding, wellbeing and the wider offer.', 'كيف يكون أداء شبكة مدارس صيدا لجميع طلابها: النتائج التربوية والحماية والرفاه والعرض الأوسع.'),
                    lz('How the network supports and influences the communities it serves.', 'كيف تدعم الشبكة المجتمعات التي تخدمها وتؤثر فيها.'),
                    lz('How the network promotes equality, diversity and inclusion in all aspects of its life.', 'كيف تعزّز الشبكة المساواة والتنوع والشمول في جميع جوانب حياتها.'),
                    lz('How resources are deployed and optimised.', 'كيف تُوزَّع الموارد وتُستثمر على أفضل وجه.'),
                    lz('Current and future capacity.', 'القدرة الحالية والمستقبلية.'),
                ],
            },
            {
                type: 'text',
                text: lz('The governing and leading members will tailor their approach to self-evaluation to fit the role they have in developing strategy, and in doing so consider:', 'سيكيّف الأعضاء الحاكمون والقياديون نهجهم في التقييم الذاتي بما يناسب دورهم في وضع الاستراتيجية، آخذين في الاعتبار:'),
            },
            {
                type: 'bullets',
                items: [
                    lz('The contribution the network makes to the member schools.', 'مساهمة الشبكة في المدارس الأعضاء.'),
                    lz('The support member schools receive from their engagement with the network.', 'الدعم الذي تتلقاه المدارس الأعضاء من انخراطها في الشبكة.'),
                    lz('Giving member schools a voice enhances legitimacy and creates a shared sense of ownership amongst the network community.', 'إعطاء المدارس الأعضاء صوتًا يعزّز الشرعية ويخلق شعورًا مشتركًا بالملكية لدى مجتمع الشبكة.'),
                ],
            },
            {
                type: 'text',
                text: lz(
                    'There are a range of methods that can be used to engage stakeholders. The Advisory Committee, Chair/Co-Chair and the board should discuss which of these mechanisms work best in their context to inform self-evaluation and decision-making. Feedback methods include:',
                    'هناك مجموعة من الأساليب لإشراك أصحاب المصلحة. وعلى اللجنة الاستشارية والرئيس/نائب الرئيس والمجلس أن يناقشوا أيّ هذه الآليات يناسب سياقهم أكثر لإرشاد التقييم الذاتي واتخاذ القرار. ومن أساليب التغذية الراجعة:',
                ),
            },
            {
                type: 'bullets',
                items: [
                    lz('Consultations', 'المشاورات'),
                    lz('Pupil voice', 'صوت الطلاب'),
                    lz('Surveys', 'الاستبيانات'),
                    lz('Online forums', 'المنتديات الإلكترونية'),
                    lz('Open days', 'الأيام المفتوحة'),
                    lz('Attending family and community hubs', 'حضور مراكز الأسر والمجتمع'),
                    lz('Maintaining relationships with local organisations', 'الحفاظ على العلاقات مع المنظمات المحلية'),
                    lz('Peer-to-peer networks', 'شبكات الأقران'),
                    lz('Participation workshops', 'ورش المشاركة'),
                ],
            },
        ],
    },

    join: {
        eyebrow,
        title: lz('Belonging to the network', 'الانتماء إلى الشبكة'),
        lead: lz('What it means to be a member, what you gain, and what you promise.', 'ماذا تعني العضوية، وما الذي تكسبونه، وما الذي تلتزمون به.'),
        image: '/images/photos/19.jpg',
        blocks: [
            { type: 'heading', title: lz('What does it mean to be a member?', 'ماذا تعني العضوية؟') },
            {
                type: 'text',
                text: lz(
                    'As a member, your institution is committed to supporting the Saida Schools Network’s mission and to translating its global goals into teaching, learning and concrete action.',
                    'بوصفها عضوًا، تلتزم مؤسستكم بدعم رسالة شبكة مدارس صيدا وبترجمة أهدافها العالمية إلى تعليم وتعلّم وعمل ملموس.',
                ),
            },
            {
                type: 'text',
                text: lz(
                    'The network is accessible to all schools, regardless of their background, resources, or setting. Becoming a member is a deliberate choice to promote educational equity, collaboration, and sustainable development.',
                    'الشبكة متاحة لجميع المدارس بصرف النظر عن خلفيتها أو مواردها أو بيئتها. والانضمام خيار واعٍ لتعزيز العدالة التربوية والتعاون والتنمية المستدامة.',
                ),
            },
            { type: 'heading', title: lz('Benefits of being a member', 'مزايا العضوية') },
            {
                type: 'steps',
                items: [
                    {
                        title: lz('Professional development opportunities', 'فرص التطوير المهني'),
                        points: [
                            lz('Access to tailored workshops and seminars led by industry experts.', 'الوصول إلى ورش وندوات مصمّمة خصيصًا يقودها خبراء في المجال.'),
                            lz('Networking opportunities with educators and professionals from diverse backgrounds.', 'فرص تواصل مع مربّين ومهنيين من خلفيات متنوعة.'),
                            lz('Collaborative projects fostering innovative teaching methodologies.', 'مشاريع تعاونية تعزّز منهجيات التدريس المبتكرة.'),
                            lz('Resources and guidance for curriculum enhancement and educational advancement.', 'موارد وإرشاد لتحسين المناهج والتقدّم التربوي.'),
                            lz('Collaborative initiatives aimed at improving teaching methodologies.', 'مبادرات تعاونية تهدف إلى تحسين منهجيات التدريس.'),
                            lz('Capacity-building workshops empowering educators with new skills and techniques.', 'ورش بناء قدرات تمكّن المربّين بمهارات وتقنيات جديدة.'),
                        ],
                    },
                    {
                        title: lz('Crisis and risk management', 'إدارة الأزمات والمخاطر'),
                        points: [
                            lz('Training sessions focusing on crisis response and risk mitigation strategies.', 'جلسات تدريبية تركّز على الاستجابة للأزمات واستراتيجيات الحد من المخاطر.'),
                            lz('Shared resources and best practices for handling emergencies within school environments.', 'موارد وأفضل ممارسات مشتركة للتعامل مع الطوارئ داخل البيئات المدرسية.'),
                            lz('Collaborative support networks for addressing challenges in real time.', 'شبكات دعم تعاونية لمواجهة التحديات في وقتها.'),
                        ],
                    },
                    {
                        title: lz('Development and sustainability', 'التنمية والاستدامة'),
                        points: [
                            lz('Engaging in interdisciplinary problem-solving activities.', 'المشاركة في أنشطة حل المشكلات المتعددة الاختصاصات.'),
                            lz('Platforms for sharing and implementing innovative solutions within education.', 'منصات لتبادل الحلول المبتكرة في التعليم وتنفيذها.'),
                            lz('Access to research and case studies aiding in effective decision-making (Observatory).', 'الوصول إلى الأبحاث ودراسات الحالة التي تساعد على اتخاذ قرارات فعّالة (المرصد).'),
                        ],
                    },
                    {
                        title: lz('Engagement in activities', 'المشاركة في الأنشطة'),
                        points: [
                            lz('Participation in multi-disciplinary activities and thematic projects promoting holistic development.', 'المشاركة في أنشطة متعددة الاختصاصات ومشاريع موضوعية تعزّز النمو المتكامل.'),
                            lz('Opportunities for students and educators to engage in community-based projects.', 'فرص للطلاب والمربّين للانخراط في مشاريع مجتمعية.'),
                            lz('Access to extracurricular programs fostering creativity and teamwork.', 'الوصول إلى برامج لا صفية تنمّي الإبداع والعمل الجماعي.'),
                            lz('Curated educational programs enhancing academic excellence and the learner profile.', 'برامج تربوية منتقاة تعزّز التميّز الأكاديمي وملمح المتعلّم.'),
                            lz('A supportive environment encouraging personal growth and confidence-building.', 'بيئة داعمة تشجّع النمو الشخصي وبناء الثقة.'),
                            lz('Mentorship programs connecting learners with industry professionals.', 'برامج إرشاد تربط المتعلّمين بمهنيين في المجال.'),
                        ],
                    },
                ],
            },
            {
                type: 'text',
                text: lz(
                    'This breakdown illustrates the multifaceted benefits of being part of the Saida Schools Network, showing how membership extends beyond professional development to encompass crisis management, problem-solving, student engagement, and overall academic and personal growth.',
                    'يبيّن هذا العرض المزايا المتعددة للانتماء إلى شبكة مدارس صيدا، وكيف تتجاوز العضوية التطوير المهني لتشمل إدارة الأزمات وحل المشكلات وإشراك الطلاب والنمو الأكاديمي والشخصي عمومًا.',
                ),
            },
            {
                type: 'callout',
                title: lz('Membership is free of charge', 'العضوية مجانية'),
                text: lz(
                    'Saida Schools Network membership is free of charge for all members. Applications, certification, and membership renewal are all free of charge.',
                    'عضوية شبكة مدارس صيدا مجانية لجميع الأعضاء. والتقديم والاعتماد وتجديد العضوية كلها مجانية.',
                ),
                image: '/images/photos/14.jpg',
            },
            { type: 'heading', title: lz('Commitment to the network', 'الالتزام تجاه الشبكة') },
            {
                type: 'text',
                text: lz('As a member of the Saida Schools Network, we hold the promise to:', 'بوصفنا أعضاء في شبكة مدارس صيدا، نقطع عهدًا بأن:'),
            },
            {
                type: 'bullets',
                items: [
                    lz('Uphold SSN’s vision and mission.', 'نصون رؤية الشبكة ورسالتها.'),
                    lz('Respond promptly and in a timely manner to the operations officer.', 'نستجيب بسرعة وفي الوقت المناسب لمسؤول العمليات.'),
                    lz('Send reports and requested documents on time.', 'نرسل التقارير والمستندات المطلوبة في موعدها.'),
                    lz('Participate, every school year, in at least one global or regional project, contest, or campaign proposed by SSN.', 'نشارك في كل عام دراسي في مشروع أو مسابقة أو حملة عالمية أو إقليمية واحدة على الأقل تقترحها الشبكة.'),
                    lz('Inform our school community about the SSN membership (for example, through staff, parent and student meetings, posters and the school website).', 'نُطلع مجتمعنا المدرسي على العضوية في الشبكة (مثلًا عبر اجتماعات العاملين والأهل والطلاب والملصقات والموقع الإلكتروني للمدرسة).'),
                    lz('Update our information (contact data, school statistics and activities) using the link sent by the operations officer every year.', 'نحدّث معلوماتنا (بيانات الاتصال وإحصاءات المدرسة وأنشطتها) عبر الرابط الذي يرسله مسؤول العمليات كل عام.'),
                ],
            },
            {
                type: 'text',
                text: lz('If a member does not fulfil these commitments, SSN has the right to terminate its membership status.', 'إذا لم يفِ العضو بهذه الالتزامات، يحق للشبكة إنهاء عضويته.'),
            },
        ],
    },

    resources: {
        eyebrow,
        title: lz('Communication, advocacy and resources', 'التواصل والمناصرة والمصادر'),
        lead: lz('How the network shares its story, the policies it supports and the sources it draws on.', 'كيف تروي الشبكة قصتها، والسياسات التي تدعمها، والمصادر التي تستند إليها.'),
        image: '/images/photos/20.jpg',
        blocks: [
            { type: 'heading', title: lz('Communication', 'التواصل') },
            {
                type: 'text',
                text: lz('Communication is the key to gaining ‘buy-in’ to the strategy.', 'التواصل مفتاح كسب ‘التأييد’ للاستراتيجية.'),
            },
            {
                type: 'text',
                text: lz(
                    'The board and executive leadership team should discuss their approach for communicating the strategy to stakeholders and building a narrative around it. This is important and contributes towards a shared sense of ownership and understanding of direction. The aim should be to:',
                    'ينبغي للمجلس وفريق القيادة التنفيذي أن يناقشا نهجهما في إيصال الاستراتيجية إلى أصحاب المصلحة وبناء سردية حولها. وهذا مهم ويسهم في الشعور المشترك بالملكية وفهم الاتجاه. وينبغي أن يكون الهدف:',
                ),
            },
            {
                type: 'bullets',
                items: [
                    lz('Explain the difference that achieving the vision and priorities will make to pupils and communities.', 'شرح الفرق الذي سيحدثه تحقيق الرؤية والأولويات للطلاب والمجتمعات.'),
                    lz('Explain the role of stakeholders in supporting the network to achieve the vision.', 'شرح دور أصحاب المصلحة في دعم الشبكة لتحقيق الرؤية.'),
                    lz('Reach different audiences: parents, pupils, staff, community leaders and others.', 'الوصول إلى جماهير مختلفة: الأهل والطلاب والعاملين وقادة المجتمع وغيرهم.'),
                    lz('Use different platforms, for example internal communication, the website, briefings, conferences, networking, external meetings and social media.', 'استخدام منصات مختلفة، مثل التواصل الداخلي والموقع الإلكتروني واللقاءات الإعلامية والمؤتمرات والتشبيك والاجتماعات الخارجية ووسائل التواصل الاجتماعي.'),
                    lz('Share the logo.', 'مشاركة الشعار.'),
                ],
            },
            { type: 'heading', title: lz('Advocacy for policies', 'المناصرة من أجل السياسات') },
            {
                type: 'bullets',
                items: [
                    lz('The Ministry of Education and Higher Education memos', 'تعاميم وزارة التربية والتعليم العالي'),
                    lz('National Policy on Inclusive Education for Children with Special Needs, in partnership with the European Union and UNICEF', 'السياسة الوطنية للتعليم الدامج للأطفال ذوي الاحتياجات الخاصة بالشراكة مع الاتحاد الأوروبي واليونيسف'),
                    lz('National Policy for Alternative Education Pathways', 'السياسة الوطنية لمسارات التعليم البديلة'),
                    lz('National Youth Policy Action Plan', 'خطة العمل للسياسة الوطنية للشباب'),
                    lz('Child Protection Policy', 'سياسة حماية الطفل'),
                ],
            },
            { type: 'heading', title: lz('Research and reports', 'الأبحاث والتقارير') },
            {
                type: 'text',
                text: lz('UNICEF’s work is based on empirical data, rigorous research and thoughtful analysis.', 'يستند عمل اليونيسف إلى بيانات تجريبية وأبحاث دقيقة وتحليل متأنٍّ.'),
            },
            {
                type: 'bullets',
                items: [
                    lz('Minimum standards for child protection in humanitarian action in Lebanon', 'المعايير الدنيا لحماية الطفل في العمل الإنساني في لبنان'),
                    lz('National strategic framework for technical vocational education and training in Lebanon 2018–2022', 'الإطار الاستراتيجي الوطني للتعليم والتدريب المهني والتقني في لبنان 2018–2022'),
                    lz('Progress of SDG4 in the Arab Region', 'التقدّم المحرز في الهدف الرابع من أهداف التنمية المستدامة في المنطقة العربية'),
                    lz('Sustainable Development Goal 4 and its targets (UNESCO)', 'هدف التنمية المستدامة الرابع وغاياته (اليونسكو)'),
                    lz('Education for Sustainable Development Goals: learning objectives', 'التعليم من أجل أهداف التنمية المستدامة: أهداف التعلّم'),
                ],
            },
            { type: 'heading', title: lz('Links', 'روابط') },
            {
                type: 'links',
                items: [
                    { label: lz('UNICEF Lebanon: research and reports', 'اليونيسف لبنان: الأبحاث والتقارير'), href: 'https://www.unicef.org/lebanon/research-and-reports' },
                    { label: lz('UNESCO: Education 2030, SDG4 targets', 'اليونسكو: التعليم 2030 وغايات الهدف الرابع'), href: 'https://en.unesco.org/education2030-sdg4/targets' },
                    { label: lz('UNESCO: Learning objectives (UNESDOC)', 'اليونسكو: أهداف التعلّم (UNESDOC)'), href: 'https://unesdoc.unesco.org/ark:/48223/pf0000247444' },
                ],
            },
        ],
    },
};
